const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z, ZodError } = require("zod");

const router = express.Router();
const { prisma } = require("../db/prisma");
const { findUserByEmail } = require("../db/users");

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "A senha precisa ter 6 caracteres"),
});

router.post("/register", async (req, res) => {
  try {
    const data = UserSchema.parse(req.body);
    const userAlreadyExists = await findUserByEmail(data.email);
    if (userAlreadyExists)
      return res.status(400).json({
        message: "User already exists",
      });
    const hash = bcrypt.hashSync(data.password, 10);
    const user = await prisma.users.create({
      data: {
        email: data.email,
        password: hash,
      },
    });
    delete user.password;
    res.send(user);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json(error.errors.map((err) => err.message));
    }
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = UserSchema.parse(req.body);
    const user = await findUserByEmail(data.email);
    if (!user) return res.status(401).json({ message: "invalid credentials" });
    const isPasswordTheSame = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordTheSame)
      return res.status(401).json({ message: "invalid credentials" });
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET
    );
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json(error.errors.map((err) => err.message));
    }
    res.status(500).send();
  }
});

module.exports = { router };

const express = require("express");
const {
  findMovies,
  findById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../db/movies");
const { auth } = require("../middlewares/auth");
const router = express.Router();
const { z, ZodError } = require("zod");

router.get("/movies", auth, async (req, res) => {
  const movies = await findMovies(req.query.rate, req.user);
  res.json(movies);
});

router.get("/movie/:id", auth, async (req, res) => {
  const id = Number(req.params.id);
  const movie = await findById(id, req.user);
  if (!movie)
    return res.status(404).json({ message: `Movie with id ${id} not found` });
  res.json(movie);
});

const MovieSchema = z.object({
  name: z
    .string({
      message: "name is required",
    })
    .min(3),
  description: z
    .string({
      message: "description is required",
    })
    .max(255)
    .optional(),
  rate: z.number().min(0).max(10),
});

router.post("/movie", auth, async (req, res) => {
  try {
    const data = MovieSchema.parse(req.body);
    const movie = await createMovie(data, req.user);
    res.status(201).json(movie);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json(error.errors.map((err) => err.message));
    }
    res.status(500).send();
  }
});

router.put("/movie/:id", auth, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = MovieSchema.parse(req.body);
    const movie = await updateMovie(id, data, req.user);
    res.json(movie);
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json(error.errors.map((err) => err.message));
    }
    res.status(500).send();
  }
});

router.delete("/movie/:id", auth, async (req, res) => {
  const id = Number(req.params.id);
  await deleteMovie(id, req.user);
  res.status(204).send();
});

module.exports = {
  router,
};

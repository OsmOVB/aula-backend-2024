const { prisma } = require("./prisma");

const findMovies = async (rate, userId) => {
  const movies = await prisma.movies.findMany({
    orderBy: {
      rate: "desc",
    },
    where: {
      rate: rate ? Number(rate) : undefined,
      usersId: userId,
    },
    include: {
      user: {
        select: {
          id: true,
          email: true,
        },
      },
    },
  });
  return movies;
};

const findById = async (id, userId) => {
  const movie = await prisma.movies.findFirst({
    where: {
      id, // id: id
      usersId: userId,
    },
  });
  return movie;
};

const createMovie = async (data, userId) => {
  const movie = await prisma.movies.create({
    data: {
      ...data,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return movie;
};

const updateMovie = async (id, data, userId) => {
  await prisma.movies.updateMany({
    data,
    where: {
      id,
      usersId: userId,
    },
  });
  return await findById(id, userId);
};

const deleteMovie = async (id, userId) => {
  await prisma.movies.deleteMany({
    where: {
      id,
      usersId: userId,
    },
  });
};

module.exports = {
  findMovies,
  findById,
  createMovie,
  updateMovie,
  deleteMovie,
};

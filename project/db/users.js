const { prisma } = require("./prisma")

const findUserByEmail = async (email) => {
    return await prisma.users.findFirst({
        where: {
            email: email
        }
    })
}

module.exports = {
    findUserByEmail
}
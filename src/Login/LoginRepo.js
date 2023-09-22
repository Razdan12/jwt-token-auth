const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const FindUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

module.exports = { FindUserByEmail }
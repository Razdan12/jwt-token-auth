const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GetAllUser = async () => {
  return await prisma.user.findMany();
};

const PostUser = async (data) => {
  return await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: data.hashPassword
    },
  });
};

const EditUser = async (data) => {
    return await prisma.user.update({
        where: {id: parseInt(data.id)},
        data:{
            email: data.email,
            name: data.name
        }
    })
}

const HapusUser = async (id) => {
    return await prisma.user.delete({
        where: {id: parseInt(id)},
    })
}

module.exports = {
  GetAllUser,
  PostUser,
  EditUser,
  HapusUser
};

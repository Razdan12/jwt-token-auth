const { GetAllUser, PostUser, EditUser, HapusUser } = require("./UserRepo")
const bcrypt = require("bcrypt")


const GetAllUserService = async () => {
    try {
        const user = await GetAllUser()
        return user
    } catch (error) {
        console.log(error);
        return "gagal mendapatkan data"
    }
}

const TambahUser = async (email, name, password) => {
    const hashPassword = await bcrypt.hash(password, 10);
    const data = { email, name, hashPassword}

    try {
        const user = await PostUser(data)
        return user
    } catch (error) {
        console.log(error);
        return "gagal menambahkan data"
    }
}

const EditUserService = async (data) => {
    try {
        const user = await EditUser(data);
        return user
    } catch (error) {
        console.log(error);
        return "gagal edit data"
    }
}

const HapusUserService = async (id) => {
    try {
        const user = await HapusUser(id)
        return user
    } catch (error) {
        console.log(error);
        return "gagal hapus data"
    }
}

module.exports = {
    GetAllUserService,
    TambahUser,
    EditUserService,
    HapusUserService
}
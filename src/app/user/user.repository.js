import { User } from "../../db/models/user.model.js";

async function findUserByEmail(email) {
    const user = await User.findOne({ email });
    return user;
}
async function findUserById(id) {
    const user = await User.findById(id);
    return user;
}

async function deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
}

async function upadateUser(id, name, email, age) {
    const user = await User.findByIdAndUpdate(id, { name, email, age });
    return user;
}

async function createUser(name, email, password, phone, age) {
    const user = await User.create({ name, email, password, phone, age });
    return user;
}

export default {
    createUser,
    findUserByEmail,
    findUserById,
    upadateUser,
    deleteUser,
};

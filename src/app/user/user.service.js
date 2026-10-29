import userRepo from "./user.repository.js";

async function signup(name, email, password, phone, age) {
    const user = await userRepo.findUserByEmail(email);

    if (user) throw new Error("Email already exists");

    const createdUser = await userRepo.createUser(
        name,
        email,
        password,
        phone,
        age,
    );

    return createdUser;
}

async function login(email, password) {
    const user = await userRepo.findUserByEmail(email);
    if (!user) throw new Error("Invalid email or password");

    if (user.password !== password)
        throw new Error("Invalid email or password");
    return user;
}

async function upadteUser(id, name, email, age) {
    const user = await userRepo.findUserById(id);

    if (!user) throw new Error("User not found");

    const checkUserEmail = await userRepo.findUserByEmail(email);

    if (checkUserEmail) throw new Error("Email already exists");

    return await userRepo.upadateUser(id, name, email, age);
}

async function deleteUser(id) {
    const user = await userRepo.findUserById(id);
    if (!user) throw new Error("User not found");
    return await userRepo.deleteUser(id);
}

async function getUser(id) {
    const user = await userRepo.findUserById(id);
    if (!user) throw new Error("User not found");
    return user;
}

export default { signup, login, upadteUser, deleteUser, getUser };

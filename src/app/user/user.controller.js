import userService from "./user.service.js";

async function signup(req, res, next) {
    try {
        const { name, email, password, phone, age } = req.body;
        const result = await userService.signup(
            name,
            email,
            password,
            phone,
            age,
        );
        res.status(201).json({
            message: "User added successfully",
            data: {
                _id: result._id,
                name: result.name,
                email: result.email,
                phone: result.phone,
                age: result.age,
            },
        });
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const result = await userService.login(email, password);
        res.status(200).json({
            message: "User login successfully",
            data: {
                _id: result._id,
                name: result.name,
                email: result.email,
                phone: result.phone,
                age: result.age,
            },
        });
    } catch (error) {
        next(error);
    }
}

async function upadteUser(req, res, next) {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        await userService.upadteUser(id, name, email, age);
        res.status(200).json({ message: "User updated" });
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const { id } = req.params;
        await userService.deleteUser(id);
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const { id } = req.params;
        const user = await userService.getUser(id);
        res.status(200).json({ message: "User found",data:{
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            age: user.age,
        } });
    } catch (error) {
        next(error);
    }
}

export default { signup, login, upadteUser, deleteUser, getUser };

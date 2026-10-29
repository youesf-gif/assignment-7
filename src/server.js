import express from "express";
import "./db/models/user.model.js";
import "./db/models/note.model.js";
import { PORT } from "./config/config.js";
import { connectDB } from "./db/connection.js";
import userRouter from "./app/user/user.route.js";
import noteRouter from "./app/note/note.route.js";

const app = express();
app.use(express.json());
await connectDB();

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.use((error, _req, res, _next) => {
    res.status(404).json({ message: error.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ::${PORT}`);
});

import { Schema, model } from "mongoose";

const schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            lowercase: true,
        },
        content: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
    },
    {
        _id: true,
        timestamps: true,
    },
);

export const Note = new model("note", schema);

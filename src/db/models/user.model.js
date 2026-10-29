import { Schema, model } from "mongoose";

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[a-zA-Z]+$/.test(v);
                },
                message: "Please enter a valid name",
            },
            minLength: 3,
            maxLength: 100,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function (v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        v,
                    );
                },
                message: "Please enter a valid email",
            },
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(v);
                },
                message: "Please enter a valid password",
            },
            minLength: 8,
            maxLength: 100,
        },
        phone: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^\d{11}$/.test(v);
                },
                message: "Please enter a valid phone number",
            },
            minLength: 8,
            maxLength: 20,
        },
        age: {
            type: Number,
            required: true,
            min: 18,
            max: 60,
        },
    },
    {
        _id: true,
    },
);

export const User = new model("user", schema);

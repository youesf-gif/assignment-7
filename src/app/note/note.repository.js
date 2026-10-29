import mongoose from "mongoose";
import { Note } from "../../db/models/note.model.js";

async function getNoteById(noteId) {
    const note = await Note.findById(noteId, {
        _id: 1,
        title: 1,
        content: 1,
        userId: 1,
        createdAt: 1,
        updatedAt: 1,
    });
    return note;
}

async function createNote(title, content, userId) {
    const note = await Note.create({ title, content, userId });

    return note;
}

async function updateNote(noteId, title, content) {
    const note = await Note.findByIdAndUpdate(noteId, { title, content });
    return note;
}

async function replaceNote(noteId, newUserId, title, content) {
    const note = await Note.findOneAndReplace(
        { _id: noteId },
        {
            title,
            content,
            userId: newUserId,
        },
    );
    return note;
}

async function getAllNotesByUserId(userId) {
    const notes = await Note.find({ userId });
    return notes;
}

async function updateAllTitleNotes(userId, title) {
    const notes = await Note.updateMany({ userId }, { title });
    return notes;
}

async function deleteNote(noteId) {
    const note = await Note.findByIdAndDelete(noteId);
    return note;
}

async function getNotesWithPaginationAndSortByCreatedAt(userId, page, limit) {
    const notes = await Note.find({ userId })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });
    return notes;
}

async function findNoteById(noteId) {
    const note = await Note.findById(noteId);
    return note;
}

async function findNoteByContent(content) {
    const note = await Note.findOne({ content });
    return note;
}

async function findNotesWithUser(userId) {
    const notes = await Note.find(
        { userId },
        { _id: 1, title: 1, createdAt: 1 },
    ).populate("userId", "email -_id");
    return notes;
}

async function findNotesAggregateWithUserByTitle(userId, title) {
    userId = new mongoose.Types.ObjectId(userId);
    const notes = await Note.aggregate([
        { $match: { userId, title } },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user",
            },
        },
        { $unwind: "$user" },
        {
            $project: {
                title: 1,
                createdAt: 1,
                user: { name: 1, email: 1 },
            },
        },
    ]);
    return notes;
}

async function deleteAllNotesByUserId(userId) {
    const notes = await Note.deleteMany({ userId });
    return notes;
}

export default {
    createNote,
    getNoteById,
    updateNote,
    replaceNote,
    getAllNotesByUserId,
    updateAllTitleNotes,
    getNotesWithPaginationAndSortByCreatedAt,
    deleteNote,
    findNoteById,
    findNoteByContent,
    findNotesWithUser,
    findNotesAggregateWithUserByTitle,
    deleteAllNotesByUserId,
};

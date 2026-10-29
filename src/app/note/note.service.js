import noteRepo from "./note.repository.js";

async function createNote(title, content, userId) {
    const note = await noteRepo.createNote(title, content, userId);
    return note;
}

async function updateNote(userId, noteId, title, content) {
    const note = await noteRepo.getNoteById(noteId);

    if (!note) throw new Error("Note not found");

    if (userId != note.userId) throw new Error("You are not the owner");

    await noteRepo.updateNote(noteId, title, content);

    const updatedNote = await noteRepo.getNoteById(noteId);

    return updatedNote;
}

async function replaceNote(noteId, userId, newUserId, title, content) {
    const note = await noteRepo.getNoteById(noteId);

    if (!note) throw new Error("Note not found");

    if (userId != note.userId) throw new Error("You are not the owner");

    await noteRepo.replaceNote(noteId, newUserId, title, content);

    const replacedNote = await noteRepo.getNoteById(noteId);

    return replacedNote;
}

async function updateAllTitleNotes(userId, title) {
    const notes = await noteRepo.getAllNotesByUserId(userId);

    if (!notes) throw new Error("No note found");

    const updatedNotes = await noteRepo.updateAllTitleNotes(userId, title);

    return updatedNotes;
}

async function deleteNote(userId, noteId) {
    const note = await noteRepo.getNoteById(noteId);

    if (!note) throw new Error("Note not found");

    if (userId != String(note.userId)) throw new Error("You are not the owner");

    await noteRepo.deleteNote(noteId);

    return note;
}

async function getNotesWithPaginationAndSortByCreatedAt(userId, page, limit) {
    const notes = await noteRepo.getNotesWithPaginationAndSortByCreatedAt(
        userId,
        page,
        limit,
    );
    return notes;
}

async function getNote(userId, noteId) {
    const note = await noteRepo.findNoteById(noteId);
    if (!note) throw new Error("Note not found");
    if (userId != note.userId) throw new Error("You are not the owner");
    return note;
}

async function getNoteByContent(content, userId) {
    const note = await noteRepo.findNoteByContent(content);

    if (!note) throw new Error("Note not found");

    if (userId != note.userId) throw new Error("You are not the owner");

    return note;
}

async function getAllNotesWithUser(userId) {
    const notes = await noteRepo.findNotesWithUser(userId);
    return notes;
}

async function getAllNotesAggregateWithUserByTitle(userId, title) {
    const notes = await noteRepo.findNotesAggregateWithUserByTitle(
        userId,
        title,
    );
    return notes;
}

async function deleteAllNotesByUserId(userId) {
    const notes = await noteRepo.deleteAllNotesByUserId(userId);
    return notes;
}

export default {
    createNote,
    updateNote,
    replaceNote,
    updateAllTitleNotes,
    deleteNote,
    getNotesWithPaginationAndSortByCreatedAt,
    getNote,
    getNoteByContent,
    getAllNotesWithUser,
    getAllNotesAggregateWithUserByTitle,
    deleteAllNotesByUserId,
};

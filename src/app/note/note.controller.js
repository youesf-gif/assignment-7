import noteService from "./note.service.js";

async function createNote(req, res, next) {
    try {
        const { title, content } = req.body;
        const { userId } = req.query;
        const data = await noteService.createNote(title, content, userId);
        res.status(201).json({ message: "Note created successfully", data });
    } catch (error) {
        next(error);
    }
}

async function updateNote(req, res, next) {
    try {
        const { title, content } = req.body;
        const { noteId } = req.params;
        const { userId } = req.query;
        const note = await noteService.updateNote(
            userId,
            noteId,
            title,
            content,
        );
        res.status(200).json({ message: "Note updated successfully", data: note });
    } catch (error) {
        next(error);
    }
}

async function replaceNote(req, res, next) {
    try {
        const { title, content, userId: newUserId } = req.body;
        const { noteId } = req.params;
        const { userId } = req.query;
        const note = await noteService.replaceNote(
            noteId,
            userId,
            newUserId,
            title,
            content,
        );
        res.status(200).json({ message: "Note replaced successfully", data: note });
    } catch (error) {
        next(error);
    }
}

async function updateAllTitleNotes(req, res, next) {
    try {
        const { title } = req.body;
        const { userId } = req.query;
        await noteService.updateAllTitleNotes(userId, title);
        res.status(200).json({ message: "All notes updated successfully" });
    } catch (error) {
        next(error);
    }
}

async function deleteNote(req, res, next) {
    try {
        const { noteId } = req.params;
        const { userId } = req.query;
        const note = await noteService.deleteNote(userId, noteId);
        res.status(200).json({ message: "Note deleted", data: note });
    } catch (error) {
        next(error);
    }
}

async function getNotesWithPaginationAndSortByCreatedAt(req, res, next) {
    try {
        const { userId, page, limit } = req.query;
        const notes =
            await noteService.getNotesWithPaginationAndSortByCreatedAt(
                userId,
                page,
                limit,
            );
        res.status(200).json({ message: "Notes retrieved successfully", data: notes });
    } catch (error) {
        next(error);
    }
}

async function getNote(req, res, next) {
    try {
        const { noteId } = req.params;
        const { userId } = req.query;
        const note = await noteService.getNote(userId, noteId);
        res.status(200).json({ message: "Note retrieved successfully", data: note });
    } catch (error) {
        next(error);
    }
}

async function getNoteByContent(req, res, next) {
    try {
        const { content } = req.query;
        const { userId } = req.query;
        const note = await noteService.getNoteByContent(content, userId);
        res.status(200).json({ message: "Note retrieved successfully", data: note });
    } catch (error) {
        next(error);
    }
}

async function getAllNotesWithUser(req, res, next) {
    try {
        const { userId } = req.query;
        const notes = await noteService.getAllNotesWithUser(userId);
        res.status(200).json({ message: "Notes retrieved successfully", data: notes });
    } catch (error) {
        next(error);
    }
}

async function getAllNotesAggregateWithUserByTitle(req, res, next) {
    try {
        const { userId, title } = req.query;
        const notes = await noteService.getAllNotesAggregateWithUserByTitle(
            userId,
            title,
        );
        res.status(200).json({ message: "Notes retrieved successfully", data: notes });
    } catch (error) {
        next(error);
    }
}

async function deleteAllNotesByUserId(req, res, next) {
    try {
        const { userId } = req.query;
        await noteService.deleteAllNotesByUserId(userId);
        res.status(200).json({ message: "Deleted" });
    } catch (error) {
        next(error);
    }
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

import { Router } from "express";
import noteController from "./note.controller.js";

const noteRouter = Router();

noteRouter.post("/", noteController.createNote);

noteRouter.patch("/all", noteController.updateAllTitleNotes);
noteRouter.put("/replace/:noteId", noteController.replaceNote);
noteRouter.get("/pagination-sort", noteController.getNotesWithPaginationAndSortByCreatedAt);

noteRouter.get("/note-by-content", noteController.getNoteByContent);
noteRouter.get("/notes-with-user", noteController.getAllNotesWithUser);
noteRouter.get("/aggregate", noteController.getAllNotesAggregateWithUserByTitle);

noteRouter.delete("/", noteController.deleteAllNotesByUserId);

noteRouter.patch("/:noteId", noteController.updateNote);
noteRouter.delete("/:noteId", noteController.deleteNote);
noteRouter.get("/:noteId", noteController.getNote);

export default noteRouter;

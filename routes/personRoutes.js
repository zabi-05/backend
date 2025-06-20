import express from 'express'
import { createPerson, deleteAllPerson, deleteSinglePerson, getPerson, getSinglePerson, updatePerson } from '../controllers/personControllers.js';

export const personRouter = express.Router()


personRouter.get("/person", getPerson);
personRouter.post("/person", createPerson);
personRouter.get("/person/:id", getSinglePerson);
personRouter.delete('/person/:id',deleteSinglePerson)

personRouter.delete('/person',deleteAllPerson );

personRouter.put('/person/:id', updatePerson);

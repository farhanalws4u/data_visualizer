import express from "express";

import { getAll, postAll } from "../controllers/dataController.js";

const router = express.Router();

router.post("/", getAll);
// router.post("/", postAll);

export default router;

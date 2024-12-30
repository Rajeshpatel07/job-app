import { Router } from "express";
import { getFeaturedJobs, getCategories, applyJob } from "../controllers/controller.js";

const router = Router();

router.get("/jobs/featured", getFeaturedJobs);
router.get("/categories", getCategories);
router.post('/jobs/apply', applyJob);

export default router;

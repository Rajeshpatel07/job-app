import { Request, Response } from "express";
import { prisma } from "../index.js";

export const getFeaturedJobs = async (req: Request, res: Response) => {
	const category = req.query.category;
	if (!category) {
		res.status(400).json({ mesage: "Bad request" });
		return;
	}
	try {
		const jobs = await prisma.job.findMany({
			where: {
				featured: true,
				category: {
					name: category.toString()
				}
			}
		})
		res.status(200).json({ jobs });
		return;
	} catch (err) {
		console.log(err);
	}
};

export const getCategories = async (req: Request, res: Response) => {
	try {
		const category = await prisma.category.findMany();
		res.status(200).json({ categories: category });
		return;
	} catch (err) {
		console.log(err)
	}
};

export const applyJob = async (req: Request, res: Response) => {
	res.status(201).json({ status: "sucess" });
	return;
};


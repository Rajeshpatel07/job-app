import { Request, Response } from "express";
import { prisma } from "../index.js";


export const getFeaturedJobs = async (req: Request, res: Response) => {
	const category = req.query.category;

	try {

		let whereClause = { featured: true }; // Start with the common condition

		if (category && category !== 'All') { // Check if category is provided AND is not "all"
			whereClause = {
				...whereClause, // Spread the existing condition
				//@ts-ignore
				category: {
					name: category.toString(),
				},
			};
		}
		const jobs = await prisma.job.findMany({
			where: whereClause,
			select: {
				id: true,
				title: true,
				company: true,
				salary: true,
				location: true,
				featured: true,
			}
		});

		res.status(200).json({ jobs });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error' });
	}
};

export const getCategories = async (req: Request, res: Response) => {
	try {
		const category = await prisma.category.findMany();
		res.status(200).json({ categories: category });
		return;
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Internal server error' });
	}
};

export const applyJob = async (req: Request, res: Response) => {
	res.status(201).json({ status: "sucess" });
	return;
};


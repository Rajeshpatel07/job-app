import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addDummyData() {
	await prisma.category.createMany({
		data: [
			{ name: 'Software Development' },
			{ name: 'Data Science' },
			{ name: 'Marketing' },
			{ name: 'Sales' },
			{ name: 'Design' },
		],
	});

	await prisma.job.createMany({
		data: [
			{ title: 'Frontend Developer', company: 'Tech Innovations Inc.', location: 'New York', salary: '$80,000 - $100,000', featured: true, categoryId: 1 },
			{ title: 'Backend Engineer', company: 'Global Solutions Ltd.', location: 'London', salary: '£60,000 - £80,000', featured: false, categoryId: 1 },
			{ title: 'Data Scientist', company: 'Analytics Pro', location: 'San Francisco', salary: '$120,000 - $150,000', featured: true, categoryId: 2 },
			{ title: 'Marketing Manager', company: 'Creative Agency', location: 'Los Angeles', salary: '$90,000 - $110,000', featured: false, categoryId: 3 },
			{ title: 'Sales Representative', company: 'SalesForce Masters', location: 'Chicago', salary: '$60,000 - $80,000 + Commission', featured: true, categoryId: 4 },
			{ title: 'UI/UX Designer', company: 'Design Wizards', location: 'Berlin', salary: '€50,000 - €70,000', featured: false, categoryId: 5 },
			{ title: 'Full Stack Developer', company: 'Code Crafters', location: 'Remote', salary: '$100,000 - $130,000', featured: true, categoryId: 1 },
			{ title: 'Data Analyst', company: 'Data Insights', location: 'Austin', salary: '$70,000 - $90,000', featured: false, categoryId: 2 },
			{ title: 'Digital Marketing Specialist', company: 'Marketing Gurus', location: 'Toronto', salary: 'CA$70,000 - CA$90,000', featured: true, categoryId: 3 },
			{ title: 'Account Executive', company: 'Sales Achievers', location: 'Dallas', salary: '$75,000 - $95,000 + Commission', featured: false, categoryId: 4 },
			{ title: 'Graphic Designer', company: 'Visual Vibes', location: 'Sydney', salary: 'AU$60,000 - AU$80,000', featured: true, categoryId: 5 },
		],
	});
}

addDummyData()
	.then(() => {
		console.log("Dummy data added successfully");
		process.exit(1);
	})
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

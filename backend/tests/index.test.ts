import request from 'supertest';
import { app } from "../src/index.js"; // Make sure the path is correct

describe("GET /api/featured", () => {
	it("should get featured jobs with category", async () => {
		const category = "Design"; // Store category in a variable
		const res = await request(app)
			.get(`/api/featured?category=${encodeURIComponent(category)}`) // Use template literal and encodeURIComponent
			.expect('Content-Type', /json/)
			.expect(200);

		// More robust comparison of the response body
		expect(res.body.jobs).toHaveLength(1); // Check if there's one job
		expect(res.body.jobs[0]).toMatchObject({ // Use toMatchObject for partial matching
			id: 11,
			title: "Graphic Designer",
			company: "Visual Vibes",
			location: "Sydney",
			salary: "AU$60,000 - AU$80,000",
			featured: true,
			categoryId: 5,
		});

		// Optional: If you MUST compare dates, consider using a date library like Moment.js or date-fns for proper date comparison.
		// Example (using toMatch):
		expect(res.body.jobs[0].createdAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
		expect(res.body.jobs[0].updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
	});

});

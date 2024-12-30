import request from 'supertest';
import { app } from "../src/index.ts";
describe("GET /api/featured", () => {
	it("should get featured jobs with category", async () => {
		const category = "Design";
		const res = await request(app)
			.get(`/api/featured?category=${encodeURIComponent(category)}`)
			.expect('Content-Type', /json/)
			.expect(200);

		expect(res.body.jobs).toHaveLength(1);
		expect(res.body.jobs[0]).toMatchObject({
			id: 11,
			title: "Graphic Designer",
			company: "Visual Vibes",
			location: "Sydney",
			salary: "AU$60,000 - AU$80,000",
			featured: true,
			categoryId: 5,
		});

		expect(res.body.jobs[0].createdAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
		expect(res.body.jobs[0].updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
	});

});

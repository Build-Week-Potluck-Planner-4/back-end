const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})

describe("[POST] /api/potlucks/:user_id", () => {
    test("sends a 201 and potluck", async () => {
        const input = { 
            potluck_name: "name", 
            date: "date", 
            time: "time", 
            location: "loaction", 
        }
        const res = await request(server)
            .post("/api/potlucks/1")
            .set("Authorization", "insert token here")
            .send(input)
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({ 
            ...input, 
            potluck_id: 2,
            user_id: 1
        })
    })
})

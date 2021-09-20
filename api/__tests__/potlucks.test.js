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
    const validInput = { 
        potluck_name: "name", 
        date: "date", 
        time: "time", 
        location: "loaction", 
    }
    test("sends a 201 and potluck", async () => {
        const res = await request(server)
            .post("/api/potlucks/1")
            .set("Authorization", "insert token here")
            .send(validInput)
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({ 
            ...validInput, 
            potluck_id: 2,
            user_id: 1
        })
    })
    test("bounces when token not added", async () => {
        const res = await request(server)
            .post("/api/potlucks/1")
            .send(validInput)
        expect(res.status).toBe(401)
        expect(res.body.message.includes("token required"))
    })
    test("bounces when token is invalid", async () => {
        const res = await request(server)
            .post("/api/potlucks/1")
            .set("Authorization", "invalid token")
            .send(validInput)
        expect(res.status).toBe(401)
        expect(res.body.message.includes("token invalid"))
    })
    test("bounces when input are missing", async () => {
        const res = await request(server)
            .post("/api/potlucks/1")
            .set("Authorization", "insert token here")
            .send({})
        expect(res.status).toBe(400)
        expect(res.body.message.includes(
            "name, date, time, and location are required"
        ))
    })
})

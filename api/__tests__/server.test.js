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

describe("[POST] /api/users/register", () => {
  test("responds with a 201 and new user", async () => {
    const input = {
      username: "username",
      password: "password",
    }
    const res = await request(server).post("/api/users/register")
      .send(input)
    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({ ...input, user_id: 1 })
  })
  test("bounces requests with no username or password", async () => {
    const res = await request(server).post("/api/users/register")
      .send({})
    expect(res.status).toBe(400)
    expect(res.body.message.includes("username and password required"))
  })
  test("bounces usernames that exist", async () => {
    const res = await request(server).post()
      .send({ 
        username: "seed_username",
        password: "password",
      })
    expect(res.status).toBe(400)
    expect(res.body.message.includes("username already exists"))
  })
})

describe("[POST] /api/users/login", () => {
  test("responds with 200 and token with correct credentials", async () => {
    const res = await request(server)
      .post("/api/users/login")
      .send({
        username: "seed_username",
        password: "seed_password" // replace with token from register endpoint
      }) 
      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty("token")
  })
  test("bounces incorrects passwords", async () => {
    const res = await request(server)
      .post("/api/users/login")
      .send({
        username: "seed_username",
        password: "wrong_password"
      }) 
      expect(res.status).toBe(404)
      expect(res.body.message.includes("wrong crendentials"))
  })
  test("bounces incorrects usernames", async () => {
    const res = await request(server)
      .post("/api/users/login")
      .send({
        username: "wrong_username",
        password: "seed_password"
      }) 
      expect(res.status).toBe(404)
      expect(res.body.message.includes("wrong crendentials"))
  })
})
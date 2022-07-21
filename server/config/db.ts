import pg from "pg"

const config = {
    user: "admin",
    database: "assignment-7",
    password: "admin",
    host: "localhost",
    port: 5432
}

const pool = new pg.Pool(config)

export { pool };
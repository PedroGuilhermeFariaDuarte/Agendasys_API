import express, { Express } from "express"
import cors from "cors"

// Routes
import UserRouter from "./Routers/User"
import ScheduleRouter from "@routers/Schedule"

// Database
import Database from "@database/index"

class App {
  server: Express

  constructor() {
    this.server = express()
    this.init()
  }

  init() {
    this.middlewares();
    this.database()
    this.router()
  }

  router() {
    this.server.use([ UserRouter, ScheduleRouter ])
  }

  database() {
    Database.init()
  }

  middlewares() {
    this.server.use(cors({
      origin: [ 'http://localhost:3000', 'http://localhost' ],
    }))
    this.server.use(express.json())
  }
}

export default new App().server

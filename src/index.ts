import dotenv from "dotenv"
dotenv.config()

import App from "./App"


App.listen(process.env.API_PORT, () => {
  console.log("API online!")
})

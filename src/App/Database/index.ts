import mongoose from "mongoose";

class Database {
  init() {
    try {
      console.log(process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        process.env.DB_CLUSTER,
        process.env.DB_NAME)

      mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        monitoring: true
      })
        .then(() => this.analisy())
        .catch(error => {
          console.log(`Houve um erro de conexão com o banco de dados: ${error.message}`)
        })
    } catch (error) {
      console.log(`Houve um erro de conexão com o banco de dados: ${error.message}`)
    }
  }

  analisy() {
    try {
      mongoose.connection.on("error", (error) => console.log(`Houve um erro durante a conexão com o banco de dados: ${error.message}`))
    } catch (error) {
      console.log(`Houve um erro analisy de conexão ${error.message}`)
    }
  }
}

export default new Database()

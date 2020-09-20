import mongoose, { Schema } from "mongoose"

const schema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  phone: {
    type: Number,
    min: 11
  },
  health_problems: {
    type: Array,
    required: true
  }
}, {
  timestamps: true,
})

export default mongoose.model("Users", schema)

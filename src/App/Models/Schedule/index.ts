import mongoose, { Schema } from "mongoose"
import { ObjectId } from "mongodb"

const schema: Schema = new mongoose.Schema({
  id_user: {
    type: ObjectId,
    required: true,
  },
  id_responsible: {
    type: ObjectId,
    required: true
  },
  date_schedule: {
    type: Date,
    required: true
  },
  qrcode: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
})

export default mongoose.model("Schedule", schema)

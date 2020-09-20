import mongoose, { Schema } from "mongoose"
import { ObjectId } from "mongodb"

const schema: Schema = new mongoose.Schema({
  id_user: {
    type: ObjectId,
    required: true,
  },
  name_responsible: {
    type: String,
    required: true
  },
  local: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  date_schedule: {
    type: String,
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

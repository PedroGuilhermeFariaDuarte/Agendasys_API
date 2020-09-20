import * as Yup from "yup"

export default Yup.object().shape({
  id_user: Yup.string().required(),
  id_responsible: Yup.string().required(),
  date_schedule: Yup.date().required(),
  phone: Yup.string(),
  qrcode: Yup.string().required()
})

import * as Yup from "yup"

export default Yup.object().shape({
  id_user: Yup.string().required(),
  name_responsible: Yup.string().required(),
  local: Yup.string().required(),
  specialty: Yup.string().required(),
  date_schedule: Yup.string().required(),
  phone: Yup.string(),
  qrcode: Yup.string().required()
})

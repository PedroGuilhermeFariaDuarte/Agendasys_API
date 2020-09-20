import * as Yup from "yup"

export default Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string(),
  phone: Yup.number().min(11),
  health_problems: Yup.array().required()
})

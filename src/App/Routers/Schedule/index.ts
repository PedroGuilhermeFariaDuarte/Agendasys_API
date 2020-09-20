import express, { Router } from "express"

// Controlers
import ScheduleController from "@controllers/Schedule";

// Middlewares
import ScheduleValidate from "@middleware/handler/Schedule/dataValidate";

const router: Router = express.Router()

router.route("/schedule/create").post(ScheduleValidate, ScheduleController.store)

router.route("/schedule/update/:idSchedule").put(ScheduleValidate, ScheduleController.update)

router.route("/schedule/delete/:idSchedule").delete(ScheduleController.delete)

router.route("/schedule/show/:idUser").get(ScheduleController.show)

router.route("/schedule/all/").get(ScheduleController.index)



export default router

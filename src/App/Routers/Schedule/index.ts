import express, { Router } from "express"

// Controlers
import ScheduleController from "@controllers/Schedule";

// Middlewares
import ScheduleValidate from "@middleware/handler/Schedule/dataValidate";
import { Verify } from '@middleware/Authentication';

const router: Router = express.Router()

router.route("/schedule/create").post(ScheduleValidate, ScheduleController.store)

router.route("/schedule/update/:idSchedule").put(Verify, ScheduleValidate, ScheduleController.update)

router.route("/schedule/delete/:idSchedule").delete(Verify, ScheduleController.delete)

router.route("/schedule/show/:idUser").get(Verify, ScheduleController.show)

router.route("/schedule/all/").get(Verify, ScheduleController.index)



export default router

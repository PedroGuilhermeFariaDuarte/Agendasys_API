import express, { Router } from "express"

// Controlers
import UserController from "@controllers/User";

// Middlewares
import UserValidate from "@middleware/handler/User/dataValidate";

const router: Router = express.Router()

router.route("/user/create").post(UserValidate, UserController.store)

router.route("/user/update/:idUser").put(UserValidate, UserController.update)

router.route("/user/delete/:idUser").delete(UserController.delete)

router.route("/user/show/:idUser").get(UserController.show)

router.route("/user/all/").get(UserController.index)

// OFF
router.route("/user/health/new").post();
router.route("/user/health/update/:idUser").put();
router.route("/user/health/delete/:idUser").delete();
// END OFF

export default router

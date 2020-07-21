const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

router.route("/tasks")
  .get(tasksController.findAll)
  .post(tasksController.create);

router
  .route("/tasks/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;

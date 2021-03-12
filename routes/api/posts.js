const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/items"
router.route("/")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;

const router = require("express").Router();
const itemRoutes = require("./posts");

// Item routes
router.use("/posts", itemRoutes);

module.exports = router;

const express = require("express");
const MovieSchema = require("../models/movieSchema");
const router = express.Router({ mergeParams: true });
const movie = require("../controller/movie");


router.route("/").get(movie.index);

router
  .route("/add")
  // .get(movie.addForm)
  .post(movie.add);
router.route("/:id").get(movie.show)
router.route('/:id').delete(movie.delete);

router.route("/:id/edit").put(movie.update);




module.exports = router;

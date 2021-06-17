const MovieSchema = require("../models/movieSchema");

const mongoose = require("mongoose");

module.exports.index = async (req, res) => {
  try {
    const MovieList = await MovieSchema.find({});
    res.status(200).json(MovieList);
  } catch (e) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.add = async (req, res) => {
  try {
    console.log(req.body);
    const newMovie = new MovieSchema(req.body);
    await newMovie.save();
    res.send(req.body);
  } catch (e) {
    res.send("error", e);
  }
};
module.exports.show = async (req, res) => {
  try{
    const movie = await MovieSchema.findById(req.params.id);
    res.status(200).json(movie);
}catch( error ){
    res.status(404).json({ message: error.message })
}
};

module.exports.update = async (req, res) => {
  let movie = await MovieSchema.findById(req.params.id);
    movie = req.body;

    const editmovie = new MovieSchema(movie);

    try{
        await MovieSchema.updateOne({_id: req.params.id}, editmovie);
        console.log(editmovie);
        res.status(201).json(editmovie);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
};
module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    MovieSchema.findByIdAndDelete(id, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deleted : ", docs);
      }
    });
    res.send("deleted");
  } catch (e) {
    res.send("errror", e);
  }
};

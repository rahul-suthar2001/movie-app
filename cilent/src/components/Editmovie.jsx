import React, { useState, useEffect } from "react";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { editmovie, show } from "../services/api";
import { useHistory, useParams } from "react-router-dom";

const initialValue = {
  MovieName: "",
  Language :'',
  RDate : '',
  Budget: "",
  Collection: "",
  Review: "",
};
const useStyles = makeStyles({
  container: {
      width: '50%',
      margin: '5% 0 0 25%',
      '& > *': {
          marginTop: 20
      }
  }
})

const Editmovie = () => {
  const [Movie, setMovie] = useState(initialValue);
  const { MovieName,Language,RDate, Budget, Collection, Review } = Movie;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();
  useEffect(() => {
    loadMovieDetails();
  }, []);
  const loadMovieDetails = async () => {
    const result = await show(id);
    console.log(result);
    setMovie(result.data);
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setMovie({ ...Movie, [e.target.name]: e.target.value });
  };
  const EditMovieDetails = async () => {
    const result = await editmovie(id, Movie);
    history.push(`/movies/${id}`);
  };
 

  return (
    <FormGroup className={classes.container}>
    <Typography variant="h4">Edit Information</Typography>
    <FormControl>
        <InputLabel htmlFor="my-input">Movie Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='MovieName' value={MovieName} id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Language</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Language' value={Language} type='text' id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
       <label htmlFor="my-input">Release Date</label>
        <Input onChange={(e) => onValueChange(e)} name='RDate' value={RDate} type='Date'  id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
        <InputLabel htmlFor="my-input">Budget</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Budget' value={Budget}  id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Collection</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Collection' value={Collection}  id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Review</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Review' value={Review}  id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
    <Button variant="contained" color="primary" onClick={() => EditMovieDetails()}>Edit Movie</Button>
    </FormControl>
</FormGroup>
  );
};

export default Editmovie;

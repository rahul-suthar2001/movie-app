import React, { useState } from "react";
import { addMovie } from "../services/api";
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const initialValue = {
  MovieName: "",
  Language : '',
  RDate : '',
  Budget: "",
  Collection: "",
  Review: ""
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
const AddMovie = () => {
  const [Movie, setMovie] = useState(initialValue);
  const { MovieName,Language,RDate, Budget, Collection, Review } = Movie;
  let history = useHistory();
 const classes = useStyles();
  const onValueChange = (e) => {
    console.log(e.target.value);
    setMovie({ ...Movie, [e.target.name]: e.target.value });
  };

  const addMovieDetails = async () => {
    await addMovie(Movie);
    history.push("./movies");
  };
  return (

    <FormGroup className={classes.container}  encType="multipart/form-data">
    <Typography variant="h4">ADD Movie</Typography>
    <FormControl>
        <InputLabel htmlFor="my-input">Movie Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='MovieName' value={MovieName} id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    
    <FormControl>
        <InputLabel htmlFor="my-input">Language</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Language' value={Language} type='text' id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
       <label htmlFor="my-input">Release Date</label>
        <Input onChange={(e) => onValueChange(e)} name='RDate' value={RDate} type='Date'  id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Budget</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Budget' value={Budget} type='Number' id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Collection</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Collection' value={Collection} type='number' id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
 
    
    <FormControl>
        <InputLabel htmlFor="my-input">Review</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='Review' value={Review} type='text' id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
    <FormControl>
        <Button variant="contained" color="primary" onClick={() => addMovieDetails()}>Edit Movie</Button>
    </FormControl>
</FormGroup>
  );
};

export default AddMovie;

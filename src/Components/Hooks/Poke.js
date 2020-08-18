import React, { useState, useEffect } from "react";
import axios from "axios";

const Poke = () => {
  const [pokemon, setPokemon] = useState([]);

  // useEffect(()=> {
  // return ()=>{

  // }
  // },[])

  //#useEffect takes a callback function and an array as its parameters
  useEffect(
    () => {
      //#componentDidMount
      axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
        setPokemon(res.data.results);
      });
      /* ------------------- Only include the return if you want a componentWillUnmount ------------------------*/
      return () => {
        //# componentWillUnmount
        //# cleanup or something on unmount
      };
      /* ------------------- Only include the return if you want a componentWillUnmount ------------------------*/
    },
    [
      //#  dependency array - whatever is inside the array will trigger the useEffect when it changes
      //#   conditions for componentDidUpdate
    ]
  );

  return <div>{JSON.stringify(pokemon)}</div>;
};

export default Poke;










//useEffect takes a callback function and an array as its parameter. 
//If we want it to fire only one time, leave array empty. 

    // Dependency array - whatever is inside the array will trigger the useEffect when it changes.
    // Conditions for componentDidUpdate go here. This will fire the useEffect every time something changes in this array.
    // But you must have that array brackets in there or it will be an infinite loop.
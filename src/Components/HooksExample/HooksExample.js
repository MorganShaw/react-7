import React, { useState } from "react";

const HooksExample = (props) => {
  //# [name of our state variable, name of our setState function] = useState(initial value for state)
  const [userInput, setUserInput] = useState("");
  const [posts, setPosts] = useState([]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    setPosts([...posts, userInput]);
  };

  return (
    <div>
      //#input box
      <input onChange={handleChange} value={userInput} />
      //#add to posts button
      <button onClick={handleClick}>Add to Post</button>
      //#list of posts
      {posts.map((element, index) => {
        return <div key={index}>{element}</div>;
      })}
      //#name passed down with props
      <div>{props.name}</div>
    </div>
  );
};

export default HooksExample;



//Look at this example next to the ClassExample component to see the differences between using hooks and using a normal class component.

//Left element being destructured below is state. Right one is the function (see lecture at 10:40ish on 8/18/20). "set..." takes the place of this.setState. 10:46.
    //# [name of our state variable, name of our setState function] = useState(initial value for state)
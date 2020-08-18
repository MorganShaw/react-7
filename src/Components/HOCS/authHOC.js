import React, { useEffect, useState } from 'react'

export default WrappedComponent => {
  //Our HOC is our default export.  It returns our wrapped component with some logic added in.
  return props => {
    const [isAdmin, setIsAdmin] = useState(false)
    //We set up a boolean on our state to track if a user is authenticated.  This will determine if they can see the wrapped component or not.

    useEffect(() => {
      //This is a very simple example but you can imagine that in this effect you could check for a session or a user on a redux state.  For now, we'll just check if a prop of admin is true or false.
      if (props.admin) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }, [props.admin])
    //Because we include props.admin in our dependencies array, the effect will run every time that value changes.

    return isAdmin ? <WrappedComponent {...props} /> : <div>Log in please</div>
  }
}
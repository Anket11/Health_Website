import React from 'react'
import './result.css'
const Correct = ({result, contentRight, contentWrong}) => {
    // console.log(result);
    
  return (
     result ? <div className="result" style = {{backgroundColor: "rgb(156, 233, 233)" }}>
        <h2>That's Correct!</h2>
        <p>
            {contentRight}
        </p>
    </div>:
     <div className="result" style = {{backgroundColor:"rgb(252, 201, 204)"}}>
     <h2>Not quite...</h2>
     <p>
         {contentWrong}
     </p>
 </div>

  )
}

export default Correct
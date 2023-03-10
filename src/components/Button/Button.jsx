import React from 'react'
// import styles
import "./button.css";

function Button(props) {
  return (
    <button {...props}>
        {props.text}
    </button>
  )
}

export default Button;
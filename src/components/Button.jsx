import React from 'react'

export function Button(props) {
    const {text,color}=props;
  return (
    <div>
        <button style={{"backgroundColor":`${color}`}}>{text}</button>
    </div>
  )
}
export default Button;

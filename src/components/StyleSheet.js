import React from 'react';
import './myStyle.css'

function StyleSheet(props) {
  let className = props.prime ? 'prime':''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Style-Sheet</h1>
    </div>
  )
}

export default StyleSheet

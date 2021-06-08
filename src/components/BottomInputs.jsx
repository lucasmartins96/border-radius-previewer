import React from 'react'
import Input from './Input'

function BottomInputs() {
  return (
    <div className="row d-flex w-100 justify-content-around" id="bottom-input">
      <Input sideBorder="bottomLeft" />
      <Input sideBorder="bottomRight" />
    </div>
  )
}

export default BottomInputs

import React from 'react'
import Input from '../Input/Input';
import Select from "../Select/Select";
import "./form.css";
function Form() {
  return (
    <form className='site-form' action="#">
        <Input />
        <Select />
    </form>
  )
}

export default Form
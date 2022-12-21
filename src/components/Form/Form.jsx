import React, { useRef, forwardRef } from 'react'
import Input from '../Input/Input';
import Select from "../Select/Select";
import "./form.css";
function Form({ countries, setCountries, setError }) {

  const inputRef = useRef();
  const selectRef = useRef();

  return (
    <form className='site-form' action="#">
      <Input ref={inputRef} setError={setError} countries={countries} setCountries={setCountries} />
      <Select ref={selectRef} setError={setError} countries={countries} setCountries={setCountries} />
    </form>
  )
}

export default Form
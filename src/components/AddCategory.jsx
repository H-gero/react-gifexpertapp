import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( {setcate}) => {
    const [inputValue, setinputValue] = useState('');    

    const handleInputValue = (e) => {
        setinputValue(e.target.value)
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length> 2){
          setcate(cats => [inputValue,...cats]);
          setinputValue('');
        }
        
    };

  return (
    <>
    <form onSubmit={handlesubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputValue}
      />
      </form>
    </>
  )
}

export default AddCategory;

// AddCategory.PropTypes = {
//   setcate: PropTypes.func.isRequired
// };

import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    
    e.preventDefault();

    const cleanInput = inputValue.trim();

    //Check input
    if(cleanInput.length <= 1) return;

    //Add category (Method 1)
    //setCategories(categories => [inputValue, ...categories]);

    //Method 2
    onNewCategory(cleanInput);

    //Reset input
    setInputValue('');
  }

  return (
    <form  aria-label='form' onSubmit={(e) => {onSubmit(e)}}>
        <input 
            type='text' 
            placeholder='Search gif'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory:  PropTypes.func.isRequired
}

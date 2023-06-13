import { useState } from 'react';

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
    <form onSubmit={(e) => {onSubmit(e)}}>
        <input 
            type='text' 
            placeholder='Search gif'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

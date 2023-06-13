import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Vegeta']);
    

    const onAddCategory = (newCategory) => {

        //Check if newCategory already exists in Categories
        if( categories.includes(newCategory) ) return;

        //Method 1
        setCategories([newCategory,...categories]);
    
        //Method 2
        // setCategories(newCat => [...categories, newCategory]);
    }
    return (
        <>
            <h1>Gif Expert App</h1>
            < AddCategory 

                //This method 1 works, but it isn't the best way because the child don't know about the father's useState(setCategories)
                //setCategories = { setCategories }

                //Method 2
                // onNewCategory = { e => onAddCategory(e)}

                //Method 2.1
                onNewCategory = { onAddCategory }
            />
            {categories.map( category => 
                (
                    < GifGrid 
                        key = { category }
                        category = { category }
                    />
                )
            )}
        </>
    )
}
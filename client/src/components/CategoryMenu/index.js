import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  //Now when we use this component, we immediately call upon the useStoreContext() Hook to retrieve the current state from the global state object and the dispatch() method to update state
  const [state, dispatch] = useStoreContext();
//Because we only need the categories array out of our global state, we simply destructure it out of state so we can use it to provide to our returning JSX.
  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  //We need to somehow take the categoryData that returns from the useQuery() Hook and use the dispatch() method to set our global state.
  //the useEffect() Hook is a function that takes two arguments, a function to run given a certain condition, and then the condition. In this case, the function runs immediately on load and passes in our function to update the global state and then the data that we're dependent on, categoryData and dispatch.
  useEffect(() => {
    if (categoryData) {
       // if categoryData exists or has changed from the response of useQuery, then run dispatch()
      /// execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
       dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a League:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;

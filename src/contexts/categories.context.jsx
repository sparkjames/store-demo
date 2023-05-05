import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utilities/firebase/firebase.utilities";

// import { addCollectionAndDocuments } from "../utilities/firebase/firebase.utilities.js";
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Use this to add values into the firebase database.
  // useEffect( () => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect( () => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log( 'categoryMap = ', categoryMap );
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
}
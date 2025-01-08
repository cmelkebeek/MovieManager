import { createContext, useEffect, useState } from "react";

export const WhishListContext = createContext();

const WhishListProvider = ({ children }) => {
  const [whishList, setWhishList] = useState([]);

  const addToWhishList = (movie) => {
    if (!whishList.find((item) => item.id === movie.id)) {
      localStorage.setItem("whishList", JSON.stringify([...whishList, movie]));
      setWhishList([...whishList, movie]);
    }
  };

  const removeFromWhishList = (movieId) => {
    setWhishList(whishList.filter((item) => item.id !== movieId));
    localStorage.removeItem("whishList");
    localStorage.setItem("whishList", JSON.stringify(whishList.filter((item) => item.id !== movieId)));
  };

useEffect(() => {
  if (whishList.length === 0 && localStorage.getItem("whishList")) {
    const whishListFromStorage = JSON.parse(localStorage.getItem("whishList"));
    if (whishListFromStorage) {
      setWhishList(whishListFromStorage);
    }
  }
}, []);

  return (
    <WhishListContext.Provider value={{ whishList, addToWhishList, removeFromWhishList }}>
      {children}
    </WhishListContext.Provider>
  );
};

export default WhishListProvider;

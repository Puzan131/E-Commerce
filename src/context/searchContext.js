import { createContext, useState, useContext } from "react";

const SearchContext = createContext({
    searchInput : "",
    setSearchInput : ()=>{}
})

const SearchContextProvider = SearchContext.Provider;

const useSearch = ()=> useContext(SearchContext);

export {SearchContextProvider}

export default useSearch

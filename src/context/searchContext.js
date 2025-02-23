import { createContext, useState, useContext } from "react";

const SearchContext = createContext({
    searchInput : "",
    redirectProductId: "",
    setSearchInput : ()=>{},
    setRedirectProductId : ()=>{}
})

const SearchContextProvider = SearchContext.Provider;

const useSearch = ()=> useContext(SearchContext);

export {SearchContextProvider}

export default useSearch

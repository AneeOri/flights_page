import React, {createContext, useState} from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {

    const [searchData, setSrarchData] = useState([
        {
            oneWayTrip: '',
            roudnTrip:'',
            source:'',
            dest:'',
            deptDate:'',
            returnDate:'',        }
    ]);

    return(
        <SearchContext.Provider value={[searchData, setSrarchData]}>
           {props.children}
        </SearchContext.Provider>
    )
}
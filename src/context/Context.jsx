import React from 'react';

export const DataContext = React.createContext(null);

const ContextProvider = ({ children }) => {

    var data = []

    const addData = (item) => {
        data.push(item)
    }
    const removeData = (idx) => {
        data.splice(idx, 1)
    }
    return (
        <DataContext.Provider value={{addData,data,removeData}}>
            {children}
        </DataContext.Provider >
    )
}

export default ContextProvider;
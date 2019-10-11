import React, {createContext, useState} from 'react';

import defLogosArr from '../helpers/logos'

export const LogosContext = createContext({
  logosArr: [],
  addToLogosList: () => {}
});


export const LogosProvider = ({children}) =>{
  const [logosArr, setLogosArr] = useState(defLogosArr)

  const addToLogosList = (newLogo) => {
    logosArr.push({'url':newLogo})
    console.log(logosArr);
    setLogosArr(logosArr);
  }

  return(
    <LogosContext.Provider value={{logosArr, addToLogosList}}>
      {children}
    </LogosContext.Provider>
  )
}

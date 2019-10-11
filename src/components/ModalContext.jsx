import React, {createContext, useState} from 'react';


export const ModalContext = createContext({
  isShowing: null,
  toggle: () => {}
});


export const ModalProvider = ({children}) =>{
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  }

  return(
    <ModalContext.Provider value={{toggle, isShowing}}>
      {children}
    </ModalContext.Provider>
  )
}

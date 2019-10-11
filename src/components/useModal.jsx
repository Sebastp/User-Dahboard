import { useState } from 'react';


//not used - decided to go with context apis
const useModal = () => {
  const [isShowing, setIsShowing] = useState(true);

  function toggle() {
    console.log('s');
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;

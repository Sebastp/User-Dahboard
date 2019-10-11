import { useState } from 'react';

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

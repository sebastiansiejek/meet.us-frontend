import { useEffect, useState } from 'react';

const useWindow = () => {
  const [windowState, setWindowState] = useState<Window & typeof globalThis>();

  useEffect(() => {
    if (!windowState) {
      setWindowState(window);
    }
  }, [windowState]);

  return windowState;
};

export default useWindow;

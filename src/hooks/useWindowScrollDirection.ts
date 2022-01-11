import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const useWindowScrollDirection = () => {
  const [isScrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    let scrollYValue = window.scrollY;

    window.addEventListener(
      'scroll',
      debounce(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollYValue) {
          setScrollDown(true);
        }

        if (currentScrollY < scrollYValue) {
          setScrollDown(false);
        }

        scrollYValue = scrollY;
      }, 150),
    );

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return {
    isScrollDown,
  };
};

export default useWindowScrollDirection;

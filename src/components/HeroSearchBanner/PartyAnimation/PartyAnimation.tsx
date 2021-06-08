import React, { useEffect, useRef } from 'react';
import SvgIlustration6 from './party.svg';
import gsap from 'gsap';

export interface PartyAnimationProps {
  className: string;
}

const PartyAnimation: React.FunctionComponent<PartyAnimationProps> = ({
  className,
}) => {
  const wrapper = useRef<any>();

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const fractales = elements.querySelectorAll('.fractale');
    const manBaloon = elements.querySelectorAll('.man-baloon');
    const womanBaloon = elements.querySelectorAll('.woman-baloon');

    const loop = {
      repeat: -1,
      yoyo: true,
      repeatDelay: 0,
    };

    gsap.set(fractales, {
      transformOrigin: '50% 50%',
    });

    gsap.from(fractales, {
      duration: 1,
      stagger: 0.3,
      scale: 0,
      ...loop,
    });

    gsap.to(manBaloon, {
      duration: 2,
      y: '-=10',
      ...loop,
    });

    gsap.to(womanBaloon, {
      ...loop,
      duration: 2,
      y: '+=10',
      x: '-=5',
      delay: 0.5,
    });
  }, []);

  return (
    <div ref={wrapper}>
      <SvgIlustration6 className={className} />
    </div>
  );
};

export default PartyAnimation;

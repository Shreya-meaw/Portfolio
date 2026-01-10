import { useEffect, useRef, useState } from 'react';

interface UseCounterAnimationProps {
  target: number;
  duration?: number;
  isDecimal?: boolean;
}

export const useCounterAnimation = ({ target, duration = 2000, isDecimal = false }: UseCounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const increment = target / (duration / 50);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }

              setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }, 50);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [target, duration, isDecimal, hasAnimated]);

  return { count, elementRef };
};

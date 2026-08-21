import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const TextReveal = ({ text, className = '', delay = 0, as = 'span' }: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const Wrapper = as === 'h1' || as === 'h2' || as === 'h3' || as === 'h4' ? 'div' : 'span';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  const words = text.split(' ');
  const Component = motion[as];

  return (
    <Wrapper ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          <Component
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.3,
              delay: delay + wordIndex * 0.05,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="inline-block"
          >
            {word}
          </Component>
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Wrapper>
  );
};

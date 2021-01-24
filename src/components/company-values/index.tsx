import ColoredSection from '@/components/colored-section';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import CompanyValuesSlider, { CompanyValuesSliderProps } from './slider';

type CompanyValuesProps = CompanyValuesSliderProps;

const CompanyValues = (props: CompanyValuesProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const animation = useAnimation();
  const variants: Variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    if (inView) animation.start('visible');
  }, [animation, inView]);

  return (
    <ColoredSection bg="blue.500" heading="What we value">
      <motion.div
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variants}
        transition={{ ease: 'easeOut', delay: 0.2 }}
      >
        <CompanyValuesSlider {...props} />
      </motion.div>
    </ColoredSection>
  );
};

export default CompanyValues;

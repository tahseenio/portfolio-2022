import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';

import { usePortfolioContext } from '../context/PortfolioContext';
import LanguageContainer from '../components/LanguageContainer';
import { container, item } from '../variants';

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -1600]);
  const yRangeSpring = useSpring(yRange, { stiffness: 400, damping: 90 });
  const [XInt, setXInt] = useState(0);

  useEffect(
    () => yRangeSpring.onChange((v) => setXInt(v * 1.2)),
    [yRangeSpring]
  );

  const { setSelectedTab, AboutRef } = usePortfolioContext();

  const title = 'About';

  return (
    <section className='container' ref={AboutRef}>
      <div className='row'>
        <motion.h1
          className='about__title'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.8, once: true }}
        >
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={item}
              style={{
                display: 'inline-block',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className='about__para'
          onViewportEnter={() => setSelectedTab('About')}
        >
          I am a passionate full stack developer with a focus on frontend
          development. I enjoy creating web applications that have great
          aesthetics and provide an amazing user experience. I am experienced
          with TypeScript, React and Node.js and am always keen on learning new
          concepts or trying out new technologies.
        </motion.p>
        <motion.h1
          className='about__title--tech'
          initial={{}}
          animate={{
            x: XInt - 1200,
            transition: { duration: 0.05, ease: 'linear' },
          }}
        >
          Tech Stack - Tech Stack - Tech Stack - Tech Stack - Tech Stack - Tech
          Stack - Tech Stack - Tech Stack - Tech Stack - Tech Stack - Tech Stack
          - Tech Stack - Tech Stack - Tech Stack - Tech Stack - Tech Stack
        </motion.h1>
        <LanguageContainer />
      </div>
    </section>
  );
};

export default About;

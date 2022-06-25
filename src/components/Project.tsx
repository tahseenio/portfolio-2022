import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  reverseColumnLayout?: boolean;
  image: string;
  bgColor: string;
}

const Project = ({ reverseColumnLayout, image, bgColor }: Props) => {
  const [gridColumns, setGridColumns] = useState<string>('0.7fr 0.3fr');
  const [gridArea, setGridArea] = useState<string>("'image info'");
  useEffect(() => {
    if (reverseColumnLayout === true) {
      setGridColumns('0.3fr 0.7fr');
      setGridArea("'info image'");
    }
  }, []);

  const projectVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const projectDescription = {
    hidden: { opacity: 0, height: '10%' },
    visible: {
      opacity: 1,
      height: '100%',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverseColumnLayout ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className='project'
      style={{ gridTemplateColumns: gridColumns, gridTemplateAreas: gridArea }}
      variants={projectVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.figure className='project__img--wrapper' variants={imageVariants}>
        <img src={image} className='project__img' alt='image' />
      </motion.figure>
      <motion.div
        className='project__info'
        variants={projectDescription}
        style={{ backgroundColor: bgColor }}
      >
        <h1>Project Name</h1>
        <p>Project Description</p>
        <div></div>
        <a href='https://github.com/tahseenio/portfolio-2022' target='_blank'>
          Live View
        </a>
        <a href='http://portfolio-2022-rose.vercel.app/' target='_blank'>
          Source Code
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Project;
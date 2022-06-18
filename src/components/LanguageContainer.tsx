import { motion } from 'framer-motion';

import Language from './ui/Language';

// TODO: add all languages

// TODO: whileInViewport start animation

import TypeScriptImg from '../assets/languages/typescript.jpg';
import ReactImg from '../assets/languages/react.jpg';
import JestImg from '../assets/languages/jest.png';
import GitImg from '../assets/languages/git.png';
import CypressImg from '../assets/languages/cypress.png';
import NextjsImg from '../assets/languages/nextjs.png';
import FirebaseImg from '../assets/languages/firebase.png';
import FramerImg from '../assets/languages/framer.svg';

interface languageProps {
  title: string;
  src: string;
  textColor: string;
  bgColor: string;
}

const LanguageContainer = () => {
  const languages: languageProps[] = [
    {
      title: 'JavaScript',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      textColor: '',
      bgColor: '#FFDF00',
    },
    {
      title: 'TypeScript',
      src: TypeScriptImg,
      textColor: 'white',
      bgColor: '#1677C7',
    },
    {
      title: 'HTML',
      src: 'https://cdn-icons-png.flaticon.com/512/174/174854.png',
      textColor: 'white',
      bgColor: '#FC490B',
    },
    {
      title: 'CSS',
      src: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      textColor: 'white',
      bgColor: '#2195F2',
    },
    {
      title: 'React',
      src: ReactImg,
      textColor: 'white',
      bgColor: '#61DAFB',
    },
    {
      title: 'Next.js',
      src: NextjsImg,
      textColor: 'white',
      bgColor: 'black',
    },
    {
      title: 'Git',
      src: GitImg,
      textColor: 'white',
      bgColor: '#DE4C36',
    },
    {
      title: 'Jest',
      src: JestImg,
      textColor: 'white',
      bgColor: '#99424F',
    },
    {
      title: 'Cypress',
      src: CypressImg,
      textColor: 'white',
      bgColor: '#5c5c5e',
    },
    {
      title: 'Sass',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png',
      textColor: 'white',
      bgColor: '#CC6699',
    },
    {
      title: 'Firebase',
      src: FirebaseImg,
      textColor: '',
      bgColor: '#FFCB2C',
    },
    {
      title: 'Figma',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      textColor: 'white',
      bgColor: 'black',
    },
    {
      title: 'Framer',
      src: FramerImg,
      textColor: 'white',
      bgColor: 'black',
    },
  ];

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.section
      className='language__container'
      variants={variants}
      initial='initial'
      animate='animate'
    >
      {languages.map(({ title, src, textColor, bgColor }) => (
        <Language
          key={title}
          variants={itemVariants}
          title={title}
          src={src}
          textColor={textColor}
          bgColor={bgColor}
        />
      ))}
    </motion.section>
  );
};

export default LanguageContainer;

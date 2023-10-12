import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    trasition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {

  const [ typeEffect ] = useTypewriter({
    words: ['Frontend Developer', 'Backend Developer', 'AI Solution', 'User Experience Designer', 'User Interface Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className="app__header-greet">Hi There! 👋 I'M</span>
              <div className="app__header-word">
                <span className="app__word-letter">K</span>
                <span className="app__word-letter">I</span>
                <span className="app__word-letter">N</span>
                <span className="app__word-letter">L</span>
                <span className="app__word-letter">E</span>
                <span className="app__word-letter">Y</span>
                <span className="app__word-letter" style={{ paddingLeft: 15 }}>
                  R
                </span>
                <span className="app__word-letter">A</span>
                <span className="app__word-letter">B</span>
                <span className="app__word-letter">G</span>
                <span className="app__word-letter">A</span>
                <span className="app__word-letter">Y</span>
              </div>

              {/* I need to add animation */}
              <div className='app__gt-animation'>
                <span className='app__gt'> {'>'} </span>
                <span className='app__word-typeEffect'>{typeEffect}</span>
                <span className='app__cursor'>_</span>
              </div>
            </div>
          </div>

          {/* <div className="tag-cmp app__flex">
            <button className='app__hire-button'>Hire me</button>
          </div> */}
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.demo_profile} alt='profile_bg' /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="cirlce-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');

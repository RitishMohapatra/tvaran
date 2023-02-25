'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About TVARAN" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">TVARAN</span> is 3 day fest brings together dignitaries from the corporate world and participants from the top colleges in Mumbai and across India to engage in the arena of music, dance, drama and sports organised by the Cultural Committee,

The fest, 


{' '}
        <span className="font-extrabold text-white">
        recently attracting over 
        </span>{' '}
        3,000 attendees, {' '}
        <span className="font-extrabold text-white"></span> {' '}
        <span className="font-extrabold text-white">explore</span> hosted everything from daxing events, delicious food stalls, game stalls, small businesses to line up of artists and more entertainment throughout the duration of the fest.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

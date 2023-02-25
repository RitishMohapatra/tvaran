'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { teams, superteams } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TeamCard, TitleText, TypingText } from '../components';

const Team = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Our Team" textStyles="text-center" />
      <TitleText title={<>Know Our Team</>} textStyles="text-center" />


      <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
        {superteams.map((item, index) => (
          <TeamCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>


      <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
        {teams.map((item, index) => (
          <TeamCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Team;

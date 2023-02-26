'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights,superteams } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`} id="events">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Our Sponsors" textStyles="text-center" />
      <TitleText title={<>Meet Our Sponsors</>} textStyles="text-center" className=' border-b-2' />
      <hr className=' ml-32 mr-32'/>
      <TitleText title={<>Title Sponsors</>} textStyles="text-center" className=' text-xs' />

      <div className="mt-[50px]   grid justify-center  gap-[10px]">
        {superteams.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
      <TitleText title={<>Other Sponsors</>} textStyles="text-center" className=' text-lg' />

      <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);
// flex-col md:flex-row
export default Insights;

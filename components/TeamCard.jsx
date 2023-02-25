'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../utils/motion';

const TeamCard = ({ imgUrl, title, subtitle, index }) => (
  <div
    variants={fadeIn('up', 'spring', index * 0.2, 1)}
    className="flex md:flex-col flex-col  gap-4"
  >
        <Image width={370}
              height={350}
        src={imgUrl}
        alt="planet-01"
        className="md:w-[370px] w-full h-[350px] rounded-[32px] object-cover"
        />

    <h1>
      <span className="font-bold text-[24px] text-white">{title}</span>
    </h1>
        

  </div>
);

export default TeamCard;

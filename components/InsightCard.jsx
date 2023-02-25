'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn } from '../utils/motion'

const InsightCard = ({ imgUrl, title, subtitle, index,link }) => (
	<div
		variants={fadeIn('up', 'spring', index * 0.1, 1)}
		className='flex flex-col gap-4 mb-10'>
			<Image width={250}
              height={600}
				src={imgUrl}
				alt='planet-01'
				className='md:w-[250px] h-[250px] ml-10 md:ml-0 rounded-full object-cover '

			/>

			<div className='flex items-center     '>
        <h1 className='font-bold  text-[24px] ml-16 md:ml-10 text-white'>"{title}"</h1>

			</div>

	</div>
)

export default InsightCard

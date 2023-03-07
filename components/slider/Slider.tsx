'use client'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';



import { DataCard } from '@/@types/card.interface'
import Card from '../card/Card'
import { ISlider } from '@/@types/slider.interface'

const Slider: FC<ISlider> = ({ data }) => {
	// const {_id, category, isFavorite, link, rating, title} = data;
	return (
		<Swiper
      modules={[Scrollbar]}
			spaceBetween={20}
			slidesPerView={4}
      scrollbar={{ draggable: true }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
		>
			{data.map(item => (
				<SwiperSlide key={item._id}>
					<Card
						key={item._id}
						title={item.title}
            image={item.image}
						link={item.link}
						type={'mini'}
						// category={item.category}
						size={'small'}
						rating={item.rating}
						showBtn={false}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider

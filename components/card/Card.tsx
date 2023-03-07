import { IPropsCard } from '@/@types/card.interface';
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Card: FC<IPropsCard> = ({ image, type, title, link, showBtn, category, rating, size }) => {

  const limit = 50;
  const titleCut = title.length > limit ? title.slice(0,limit) + '...' : title;


	return (
		<div className={`card card-type-${type} card-size-${size}`} title={title}>
      <div className="card__image">
			<Image
				src={image}
				fill={true}
				alt={title}
				style={{ objectFit: 'cover' }}
			/>
      </div>
			<div className='card__content'>
				<Link className='card__link' href={link}></Link>
				<div className='card__labels'>
					{category && (
						<Link href={category.link} className='card__label card__category'>
							{category.title}
						</Link>
					)}
					{rating && <div className='card__label card__rating'>{rating}</div>}
				</div>
				<h2 className='card__title'>{titleCut}</h2>
				{showBtn && <div className="card__btn"><Link className='btn' href={link}>Смотреть подборку</Link></div>}
			</div>
		</div>
	)
}

export default Card

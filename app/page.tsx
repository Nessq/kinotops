import { DataCard } from '@/@types/card.interface'
import Card from '@/components/card/Card'
import Slider from '@/components/slider/Slider'
import Link from 'next/link'

const cards: DataCard[] = [
	{
		_id: '1',
		image: '/content/card.jpg',
		title: 'Самые лучшие подборки 2023 года, которые заставляют задуматься',
		category: { title: 'Комедия', link: '/category/comedy' },
		link: '/collections/title',
		rating: '7.64',
		isFavorite: false
	},
	{
		_id: '2',
		image: '/content/card.jpg',
		title: 'Самые лучшие подборки 2023 года, которые заставляют задуматься',
		category: { title: 'Комедия', link: '/category/comedy' },
		link: '/collections/title',
		rating: '3.64',
		isFavorite: false
	},
	{
		_id: '3',
		image: '/content/card.jpg',
		title: 'Самые лучшие подборки 2023 года, которые заставляют задуматься',
		category: { title: 'Комедия', link: '/category/comedy' },
		link: '/collections/title',
		rating: '9.64',
		isFavorite: false
	},
	{
		_id: '4',
		image: '/content/card.jpg',
		title: 'Самые лучшие подборки 2023 года, которые заставляют задуматься',
		category: { title: 'Комедия', link: '/category/comedy' },
		link: '/collections/title',
		rating: '5.64',
		isFavorite: false
	},
	{
		_id: '5',
		image: '/content/card.jpg',
		title: 'Самые лучшие подборки 2023 года, которые заставляют задуматься',
		category: { title: 'Комедия', link: '/category/comedy' },
		link: '/collections/title',
		rating: '5.64',
		isFavorite: false
	}
]

export default function Home() {


	return (
		<div className='home'>
			<div className='container'>
				<div className='home-main'>
					<div className='home-main__big'>
						{[cards[0]].map(item => (
							<Card
								key={item._id}
								image={item.image}
								title={item.title}
								link={item.link}
								type={'all'}
								category={item.category}
								size={'big'}
								// rating={item.rating}
								showBtn={true}
							/>
						))}
					</div>
					<div className='home-main__smalls'>
						{cards.slice(1,4).map(item => (
							<Card
								key={item._id}
								image={item.image}
								title={item.title}
								link={item.link}
								type={'all'}
								category={item.category}
								size={'small'}
								// rating={item.rating}
								showBtn={false}
							/>
						))}
					</div>
				</div>
			</div>

			<div className='home-new'>
				<div className='container'>
					<div className='block-top'>
						<div className='block-title'>Новинки 2023</div>
						<Link href='/catalog/' className='btn btn--block block-link'>
							Все новинки 2023
						</Link>
					</div>
					<Slider data={cards} />
				</div>
			</div>

			<div className='home-category section-dark'>
				<div className='container'>
					<div className='block-top'>
						<div className='block-title'>Cериалы</div>
						<Link href='/catalog/' className='btn btn--block btn--block-alternate block-link'>
							Все новинки 2023
						</Link>
					</div>

          

				</div>
			</div>
		</div>
	)
}

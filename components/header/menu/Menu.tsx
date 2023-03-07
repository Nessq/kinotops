import Link from 'next/link'
import { FC } from 'react'

const menu = [
	{
		title: 'Фильмы',
		permalink: '/category/films'
	},
	{
		title: 'Сериалы',
		permalink: '/category/serials'
	},
	{
		title: 'Мультфильмы',
		permalink: '/category/multfilms'
	},
	{
		title: 'Жанры',
		permalink: '/category/hz',
		children: [
			{
				title: 'Бойовик',
				permalink: '/category/test'
			},
			{
				title: 'Еще что то',
				permalink: '/category/test'
			},
			{
				title: 'и еще',
				permalink: '/category/test'
			}
		]
	}
]

const Menu: FC = () => {
	return (
		<ul className='header__menu'>
			{menu.map((item) => {
				return (
					<li key={item.title}>
						<Link href={item.permalink}>
							{item.title}
							{item.children && <i></i>}
						</Link>
						{item.children && (
							<ul className='header__submenu'>
								{item.children.map((item) => (
									<li key={item.title}>
										<Link href={item.permalink}>{item.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}

export default Menu

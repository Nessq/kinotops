'use client'
import Image from 'next/image'
import { FC } from 'react'

import Auth from './auth/Auth'
import Menu from './menu/Menu'
import Search from './search/Search'

const Header: FC = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__row'>
					<div className='header__logo'>
						<Image
							src={'/logo.svg'}
							width={157}
							height={35}
							alt={'logo kinotops'}
							sizes='(max-width:767px) 100vw, (max-width: 1200px) 157px, 157px'
						/>
					</div>

					<Menu />
					<Search />
					<Auth />
				</div>
			</div>
		</header>
	)
}

export default Header

import Image from 'next/image'
import React, { useState } from 'react'

const Search = () => {
	const [value, setValue] = useState('')
	return (
		<div className='header__search'>
			<div className='text-field text-field--header'>
				<Image src={'/svg/search-icon.svg'} width={20} height={20} alt=''/>
				<input
					type='search'
					onChange={e => setValue(e.target.value)}
					value={value}
					placeholder='Фильм, сериал ...'
				/>
			</div>
		</div>
	)
}

export default Search

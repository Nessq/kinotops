import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Auth = () => {
	const [value, setValue] = useState('')
	return (
		<div className='header__auth'>
			<Link href={'/auth/login'} className='btn btn--login'>
				<Image src={'/svg/user.svg'} width={20} height={20} alt='' />
				Вход
			</Link>
			<Link href={'/auth/register'} className='btn btn--register'>
				Регистрация
			</Link>
		</div>
	)
}

export default Auth

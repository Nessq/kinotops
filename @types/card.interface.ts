

export type DataCard = {
	_id: string
	title: string
	link: string
	image: string
	category: {
		title: string
		link: string
	}
	rating: string
	isFavorite: boolean
}

export interface IPropsCard {
	type: 'all' | 'mini'
  size: 'big' | 'medium' | 'small'
	title: string
	link: string
	image: string
	showBtn?: boolean
	category?: {
		title: string
		link: string
	}
	rating?: string
}
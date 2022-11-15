import { useEffect, useState } from 'react'

// custom components
import Accordion from '../../components/accordion/accordion'
import Carousel from '../../components/carousel/carousel'
import Filter from '../../components/filter/filter'

//dummy Data
const ImageData = [
	{
		image: 'https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1',
	},
	{
		image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1',
	},
	{
		image: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1',
	},
]

const Population = () => {
	//Local state
	const [user, setUser] = useState([])
	const [country, setCountry] = useState([])
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(4)
	const [sort, setSort] = useState(false)

	//Api calling here
	const fetchData = (sort) => {
		return fetch(
			'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
		)
			.then((response) => response.json())
			.then((data) => {
				setUser(data)
				setCountry(data.data)

				if (sort) {
					setCountry(data.data.reverse())
				}
			})
	}

	// Sorting function
	const handleSort = () => {
		setSort(!sort)
	}

	//Filter function
	const handleFilter = (e) => {
		const filtered = user?.data?.filter((item) => {
			return item.Year === e
		})
		setCountry(filtered)
	}

	//Show All Data
	const handleShowAllData = () => {
		setEndIndex(user?.data?.length)
	}

	useEffect(() => {
		fetchData(sort)
	}, [sort])

	return (
		<div>
			<Carousel slides={ImageData} />
			<div className="p-5 mt-4">
				<Filter
					handleSort={handleSort}
					sort={sort}
					Year={user?.data}
					handleFilter={handleFilter}
				/>
				<div className="accordion mt-3">
					{country?.slice(startIndex, endIndex).map((item, index) => (
						<Accordion
							Title={item.Year}
							Nation={item.Nation}
							Population={item.Population}
							Source={user?.source[0]?.annotations?.source_name}
						/>
					))}
				</div>
				<div
					className="view-all float-right cursor-pointer"
					onClick={handleShowAllData}
				>
					View All
				</div>
			</div>
		</div>
	)
}
export default Population

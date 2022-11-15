import { AESC, DESC } from '../../assets/images'
import './filter.css'

const Filter = ({ sort, handleSort, Year, handleFilter }) => {
	const filterData =
		Year &&
		Year?.map((item) => ({
			label: item?.Year,
			value: item?.Year,
		}))
	return (
		<div className="d-flex justify-content-between mb-5">
			<div className="title">Population</div>
			<div className="select">
				<span className="mr-20 cp" onClick={handleSort}>
					<img
						src={sort ? AESC : DESC}
						alt="sort"
						height="20"
						width="20"
					/>
				</span>
				<select
					className="filter"
					name="filter"
					id="filter"
					onChange={(e) => handleFilter(e.target.value)}
				>
					<option value="year">Filter year</option>
					{filterData?.map((value, index) => (
						<option value={value.value} key={index}>
							{value.label}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default Filter

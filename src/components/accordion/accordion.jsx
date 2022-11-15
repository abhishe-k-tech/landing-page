import { useState } from 'react'
import './accordion.css'
const Accordion = ({ Title, Nation, Population, Source }) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className="accordion-item">
			<div
				className="accordion-title"
				onClick={() => setIsActive(!isActive)}
			>
				<div>{Title}</div>
				<div>{isActive ? '-' : '+'}</div>
			</div>
			{isActive && (
				<div className="accordion-content">
					<div className="d-flex justify-content-between">
						<div className="nation">
							<h6>Nation</h6>
							{Nation}
						</div>
						<div className="population">
							<h6>Population</h6>

							{Population}
						</div>
						<div className="source">
							<h6>Source Name</h6>
							{Source}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Accordion

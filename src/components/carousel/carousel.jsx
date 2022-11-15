import { useState } from 'react'
import { LEFT_ARROW, RIGHT_ARROW } from '../../assets/images'
import './carousel.css'

const Carousel = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	return (
		<div className="carousel-container">
			<div className="left-arrow" onClick={prevSlide}>
				<img src={LEFT_ARROW} alt="left=arrow" height="30" width="30" />
			</div>
			<div className="right-arrow" onClick={nextSlide}>
				<img
					src={RIGHT_ARROW}
					alt="right=arrow"
					height="30"
					width="30"
				/>
			</div>
			{slides.map((slide, index) => {
				return (
					<div key={index}>
						{index === current && (
							<img
								className="carousel-items"
								src={slide.image}
								alt={`carousel-${index}`}
							/>
						)}
					</div>
				)
			})}
		</div>
	)
}
export default Carousel

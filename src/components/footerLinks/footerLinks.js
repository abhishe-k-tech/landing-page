import { useNavigate } from 'react-router-dom'

const Links = ({ data }) => {
	const navigate = useNavigate()

	return (
		<>
			{data.map((item, index) => (
				<div
					className="fs-12"
					key={index}
					onClick={() => navigate(item.url)}
				>
					{item.name}
				</div>
			))}
		</>
	)
}
export default Links

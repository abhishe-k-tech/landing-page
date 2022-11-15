import Links from '../footerLinks/footerLinks'
import Title from '../title/title'

const Footer = () => {
	const links1 = [
		{ url: '#', name: 'Lorem Ipsum' },
		{ url: '#', name: 'Lorem Ipsum' },
		{ url: '#', name: 'Lorem Ipsum' },
		{ url: '#', name: 'Lorem Ipsum' },
	]
	return (
		<div className="bg-dark text-light p-5">
			<div className="row text-center mb-4">
				<div className="col-12">
					<h2 className="">Company</h2>
				</div>
			</div>
			<div className="row  text-center">
				<div className="col-3">
					<Title title="Lorem Ipsum" />
					<Links data={links1} />
				</div>
				<div className="col-3">
					<Title title="Lorem Ipsum" />
					<Links data={links1} />
				</div>
				<div className="col-3">
					<Title title="Lorem Ipsum" />
					<Links data={links1} />
				</div>
				<div className="col-3">
					<Title title="Lorem Ipsum" />
					<Links data={links1} />
				</div>
			</div>
		</div>
	)
}
export default Footer

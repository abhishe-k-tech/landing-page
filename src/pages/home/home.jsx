// custom components
import Carousel from '../../components/carousel/carousel'

// custom css
import './home.css'
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
const Home = () => {
	return (
		<div>
			<Carousel slides={ImageData} />
			<div className="row mt-5">
				<div className="col-5">
					<div>
						<h1>Lorem ipsum</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit, sed diam nonummy nibh euismod tincidunt ut
							laoreet dolore magna aliquam erat volutpat. Ut wisi
							enim ad minim veniam, quis nostrud exerci tation
							ulla- mcorper suscipit lobortis nisl ut aliquip ex
							ea commodo consequat. Duis autem vel eum iriure
							dolor in hendrerit in vulputate velit esse molestie
							consequat, vel illum dolore eu feugiat nulla
							facilisis at vero
						</p>
						<button className="dummy-btn">Lorem ipsum</button>
					</div>
				</div>
				<div className="col-7">
					<div>
						<img
							className="dummy-image"
							src="https://i.imgur.com/C7cZeFA.png"
							alt="lorem-ipsum"
						/>
					</div>
				</div>
			</div>
			<div className="row mt-5 mb-5">
				<div className="col-7">
					<div>
						<img
							className="dummy-image"
							src="https://i.imgur.com/C7cZeFA.png"
							alt="lorem-ipsum"
						/>
					</div>
				</div>
				<div className="col-5">
					<div className="text-right">
						<h1>Lorem ipsum</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit, sed diam nonummy nibh euismod tincidunt ut
							laoreet dolore magna aliquam erat volutpat. Ut wisi
							enim ad minim veniam, quis nostrud exerci tation
							ulla- mcorper suscipit lobortis nisl ut aliquip ex
							ea commodo consequat. Duis autem vel eum iriure
							dolor in hendrerit in vulputate velit esse molestie
							consequat, vel illum dolore eu feugiat nulla
							facilisis at vero
						</p>
						<button className="dummy-btn">Lorem ipsum</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home

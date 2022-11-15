import Footer from '../footer/footer'
import Header from '../header/header'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="container-fluid ps-4 pe-4">{children}</div>
			<Footer />
		</>
	)
}
export default Layout

import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useNavigate } from 'react-router-dom'

import { SEARCH_ICON } from '../../assets/images/index'

const links = [
	{ name: 'Page 1', url: '/' },
	{ name: 'Page 2', url: '/population' },
]

function Header() {
	const navigate = useNavigate()

	const handleRedirect = (url) => {
		navigate(url)
	}
	return (
		<Navbar bg="dark" expand="sm" className="mb-3" variant="dark">
			<Container fluid className="ps-4 pe-4">
				<Navbar.Brand
					className="cursor-pointer"
					onClick={() => navigate('/')}
				>
					LOGO
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
				<Navbar.Offcanvas
					id="offcanvasNavbar-expand-sm"
					aria-labelledby="offcanvasNavbarLabel-expand-sm"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-center flex-grow-1 pe-3">
							{links.map((item, index) => (
								<Nav.Link
									onClick={() => handleRedirect(item.url)}
								>
									{item?.name}
								</Nav.Link>
							))}
						</Nav>
						{/* <Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
						</Form> */}
						<div className="bg-white p-2 align-items-center d-flex">
							<img
								src={SEARCH_ICON}
								alt="search"
								width="20"
								height="20"
							/>
						</div>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	)
}

export default Header

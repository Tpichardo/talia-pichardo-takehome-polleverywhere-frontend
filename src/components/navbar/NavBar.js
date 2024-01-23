import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import brandImg from "../../Assets/brandImg.png";

const NavBar = () => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={brandImg}
						width="45"
						height="45"
						className="d-inline-block align-top"
					/>
					Raffle
				</Navbar.Brand>
				<Nav className="d-flex">
					<Nav.Link
						as={NavLink}
						to="/">
						Home
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to="/raffles">
						Raffles
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to="raffles/new">
						Add Raffle
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;

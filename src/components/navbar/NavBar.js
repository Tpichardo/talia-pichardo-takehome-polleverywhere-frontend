import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import brandImg from "../../Assets/brandImg.png";
import "./NavBar.css";

const NavBar = () => {
	return (
		<Navbar>
			<Container>
				<Link
					className="brandLogo"
					to="/">
					<Navbar.Brand>
						<img
							alt="colorful ticket tumbler icon"
							src={brandImg}
							width="45"
							height="45"
							className="d-inline-block align-top"
						/>
						Raffle
					</Navbar.Brand>
				</Link>
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

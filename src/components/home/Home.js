import NewRaffleForm from "../newRaffle/AddNewRaffleForm";
import heroImg from "../../Assets/heroImg.PNG";

import "./Home.css";
const Home = () => {
	return (
		<div className="hero">
			<div className="heroContainer">
				<div className="heroText">
					<h1>Lucky You, Raffle Dreams Come True! </h1>
					<p>
						Unlock the thrill of winning with our hassle-free raffle experience.
						Your luck, your prize, effortlessly!"
					</p>
				</div>
				<div className="heroImg">
					<img
						src={heroImg}
						alt="Excited woman celebrating big win, showered by confetti"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;

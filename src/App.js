import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import allRaffles from "./components/raffles/AllRaffles";
import AddNewRaffleForm from "./components/newRaffle/AddNewRaffleForm";

// import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={Home}
				/>
				<Route
					path="/raffles"
					element={allRaffles}
				/>
				<Route
					path="/raffles/new"
					element={AddNewRaffleForm}
				/>
			</Routes>
		</div>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import AllRaffles from "./components/raffles/AllRaffles";
import NewRaffleForm from "./components/newRaffle/NewRaffleForm";
import NewParticipantForm from "./components/newParticipant/NewParticipantForm";
import Participants from "./components/participants/Participants";

// import "./App.css";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/raffles"
					element={<AllRaffles />}
				/>
				<Route
					path="/raffles/new"
					element={<NewRaffleForm />}
				/>
				<Route
					path="/raffles/:id"
					element={<NewParticipantForm />}
				/>
				<Route
					path="/raffles/:id/participants"
					element={<Participants />}
				/>
			</Routes>
		</QueryClientProvider>
	);
}

export default App;

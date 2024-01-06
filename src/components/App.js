import "../assets/styles/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Intro from "./Intro";
import Games from "./Games";
import Music from "./Music";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Intro />} />
				<Route path="/games" element={<Games />} />
				<Route path="/music" element={<Music />} />
			</Routes>
		</div>
	);
}

export default App;

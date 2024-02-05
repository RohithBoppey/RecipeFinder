// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import FindRecipe from "./pages/FindRecipe";
import Demo from "./pages/Demo";
import AllDishes from "./pages/AllDishes";
import SummarisedRecipe from "./pages/SummarisedRecipe";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/find-recipe" element={<FindRecipe />} />
					<Route exact path="/recipes/:id" element={<AllDishes />} />
					<Route exact path="/demo" element={<Demo />} />
					<Route exact path="/recipe/:id/summary" element={<SummarisedRecipe />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

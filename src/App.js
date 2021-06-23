import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Footer from "./Components/Footer/Footer";
import  Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from "./GlobalStyle";

import { NotFound, Spinner } from "./Components/UI/";
import ScrollToTop from "./Components/ScrollToTop";
const HomePage = React.lazy(() => import("./pages/Homepage/HomePage"));
const Products = React.lazy(() => import("./pages/Products/Products"));
const About = React.lazy(() => import("./pages/About/About"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Stores = React.lazy(() => import("./pages/Stores/Stores"));
// const Grab = React.lazy(() => import("./pages/Grab/Grab"));
// const Loship = React.lazy(() => import("./pages/Loship/Loship"));
const Membership = React.lazy(() => import("./pages/Membership/Membership"));
const Feedback = React.lazy(() => import("./pages/Feedback/Feedback"));

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<GlobalStyle />
				<ScrollToTop />
				<Navbar />

				<Switch>
     			   	
					<Route path="/" exact component={HomePage} />
					<Route path="/products" exact component={Products} />
					<Route path="/blog" exact component={Blog} />
					<Route path="/stores" exact component={Stores} />
					<Route path="/about" exact component={About} />
					{/* <Route path="/grab" exact component={Grab} />
					<Route path="/loship" exact component={Loship} /> */}
					<Route path="/membership" exact component={Membership} />
					<Route path="/feedback" exact component={Feedback} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</Suspense>
	);
}

export default App;

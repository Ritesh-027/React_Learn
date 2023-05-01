import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Understanding the react-router. In react-library its not given we have to install the react-router.
const Home = () => {
  return <h1>Welcome to the Home page!</h1>;
};
//These are the pages.
const About = () => {
  return <h1>About Us</h1>;
};
const Contact = () => {
  return <h1>Contact Us</h1>;
};
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
                {/* This is for creating a links */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};
export default App;

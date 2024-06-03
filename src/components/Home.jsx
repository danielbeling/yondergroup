import './styles/Home.css';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="banner">
      <div className="home">
        <h2>Welcome to YonderGroup</h2>
        <p>Perform all the calculations you need with ease. Our advanced and intuitive tools are available at any time, ensuring precision and efficiency. Try them now and optimize your work.</p>
        <Link to="services" className="button-26 ">Services</Link>
      </div>
    </div>
  );
}

export default Home;

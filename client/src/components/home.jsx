import Navbar from './navbar';
import HomeTrips from './sub-components/currentTrips';
import './home.css';
const HomePage = () => {
    return(
        <>
        <Navbar/>
        <div id='current-trips-header'>Your Trips</div>
        <HomeTrips/>
        </>

    );

}
export default HomePage;
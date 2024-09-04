import Navbar from './navbar';
import HomeTrips from './sub-components/currentTrips';
import HomePrevTrips from './sub-components/previousTrips';
import TripModal from '../modals/tripModal';
import './home.css';
const HomePage = () => {
    return(
        <>
        <Navbar/>
        <div id='current-trips-header'>Your Trips</div>
        <HomeTrips/>
        <div id='previous-trips-header'>Your Previous Trips</div>
        <HomePrevTrips/>
        <TripModal>
        <div className='add-trip-container'>
            <form id='form-content'>
                <div>Create a New Trip</div>
                <div>Trip Name</div>
                <input type="text"></input>
                <div>Location</div>
                <input type="text" value="Where are we going?"></input>
                <div className="date-selector">

                </div>
            </form>

        </div>

        </TripModal>
        </>

    );

}
export default HomePage;
import Navbar from './navbar';
import HomeTrips from './sub-components/currentTrips';
import HomePrevTrips from './sub-components/previousTrips';
import TripModal from '../modals/tripModal';
import './home.css';
const HomePage = () => {
    return(
        <>
        <Navbar/>
        <div id="current-trips-header">Your Trips</div>
        <HomeTrips/>
        <div id="previous-trips-header">Your Previous Trips</div>
        <HomePrevTrips/>
        <TripModal>
        <div className="addTripContainer">
            <form id="form-content">
                <div id="form-header">Create a New Trip</div>
                <div className="subHeaders">Trip Name</div>
                <input className="addTripInput" type="text" id='trip-name-input'></input>
                <div className='subHeaders'>Location</div>
                <input className="addTripInput" id='location-input' type="text" placeholder="Where are we going?"></input>
                <div className="date-selector">
                    <div className="subHeaders" id="start-date"></div>
                    <div className="subHeaders" id="end-date"></div>
                    <button id="select-start-date"></button>
                    <button id="select-end-date"></button>
                </div>
                <div className="subHeaders">Travelers</div>
                <input className="addTripInput" id='traveler-input' type="text" placeholder="Add Your Friends"></input>
                <div className="subHeaders">Budget Amount</div>
                <input className="addTripInput" type="text"></input>

            </form>

        </div>

        </TripModal>
        </>

    );

}
export default HomePage;
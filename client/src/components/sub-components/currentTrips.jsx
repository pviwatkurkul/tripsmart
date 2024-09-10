import './currentTrips.css';
import Trips from './Trips';
import AddTrip from './addTrip';
const HomeTrips = () =>{
    return (
        <>
            <div className= 'tripsContainer'>
                <AddTrip/>
                <Trips/>
                <Trips/>
                <Trips/>
                <Trips/>
                <Trips/>
                <Trips/>
                <Trips/>

            </div>
        </>
    )

}
export default HomeTrips;
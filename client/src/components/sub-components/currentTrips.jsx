import './currentTrips.css';
import AddTrips from './addTrips';
import AddTrip from './addTrip';
const HomeTrips = () =>{
    return (
        <>
            <div className= 'tripsContainer'>
                <AddTrip/>
                <AddTrips/>
                <AddTrips/>
                <AddTrips/>
                <AddTrips/>
                <AddTrips/>
                <AddTrips/>
                <AddTrips/>

            </div>
        </>
    )

}
export default HomeTrips;
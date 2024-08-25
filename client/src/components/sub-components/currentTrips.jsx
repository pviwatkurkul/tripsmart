import './currentTrips.css';
import AddTrips from './addTrips';
const HomeTrips = () =>{
    return (
        <>
            <div className= 'tripsContainer'>
                <AddTrips/>
                <AddTrips/>
            </div>
        </>
    )

}
export default HomeTrips;
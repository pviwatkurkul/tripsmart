import './Trips.css';
import placeholder from '../../assets/placeholder.jpg';
const Trips = () => {
    return (
    <>  
        <div className='trip-container'>
            <div id='img-box'>
            <img
            className="placeholderImg"
            src={placeholder}
            alt="placeHolder"
            loading="lazy"
            width="300"
            height="330"
            />
            </div>
            <div id='trip-name'>
                Trip Name
            </div>
            <div id='trip-date'>
                Trip Date
            </div>
        </div>

    </>

    );
}

export default Trips;
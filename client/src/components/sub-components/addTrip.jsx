import './addTrip.css';
import placeholder from '../../assets/placeholder.jpg';
import{ReactComponent as AddTripSVG} from '../../assets/addTrip.svg';
const AddTrip = () => {
    return (
    <>  
            <div className='trip-container'>
                <div id='img-box'>
                    <button id='btn-add-trip' onClick={() => console.log('clicked') }>
                        <img
                        className="placeholderImg"
                        src={placeholder}
                        alt="placeHolder"
                        loading="lazy"
                        width="300"
                        height="330"
                        />
                        <AddTripSVG id='add-button1'/>
                    </button>
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

export default AddTrip;
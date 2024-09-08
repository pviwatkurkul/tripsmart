import {createPortal} from 'react-dom';

const TripModal = ({open, children}) => {
    return createPortal(
        <>
        <div>
            {children}
        </div>
        </>,
        document.getElementById('addTripPortal')
    );

}
export default TripModal;
import {createPortal} from 'react-dom';


const OVERLAY = {
    position:'fixed',
    top:0,
    right:0,
    bottom:0,
    left:0,
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex:100
}
const TripModal = ({open, children}) => {
    if(!open) return null;
    return createPortal(
        <>
        <div style={OVERLAY}/>
        <div>
            {children}
        </div>
        </>,
        document.getElementById('addTripPortal')
    );

}
export default TripModal;
import PropTypes from "prop-types";
import React,{useState} from "react";
import css from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal"



const ImageGalleryItem = ({id, webformatURL, tags, largeImageURL}) => {
    
    const [showModal, setShowModal] = useState(false);

    const toggleModal =() => {
        setShowModal( !showModal)
    };

    return (
        <>
            <li key={id} className={css["gallery-item"]}>
            <img className={css.img}
                src={webformatURL} 
                alt={tags} 
                onClick={toggleModal}
                />
                {showModal && (
                <Modal onClick={toggleModal}>
                    <img src={largeImageURL} alt={tags} />
                </Modal>)}
            </li>
        </>
    )
}

export default ImageGalleryItem;


ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};



// export class ImageGalleryItem extends Component {
//     state ={
//         showModal: false,
// }

// toggleModal = () => {
//     this.setState(({showModal}) => ({
//         showModal: !showModal
//     }))
// }
//     render() {
//         const {id, webformatURL, tags} = this.props
//         return(
//             <>  
//             <li key={id} className={css["gallery-item"]}>
//             <img className={css.img}
//                 src={webformatURL} 
//                 alt={tags} 
//                 onClick={this.toggleModal}
//                 />
//                 {this.state.showModal && (
//                 <Modal onClick={this.toggleModal}>
//                     <img src={this.props.largeImageURL} alt={this.props.tags} />
//                 </Modal>)}
//             </li>
//             </> 
//         )
//     } 
// }

// ImageGalleryItem.propTypes = {
//     webformatURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
// };
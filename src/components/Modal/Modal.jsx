import { useEffect } from "react";
import css from "./Modal.module.css";

import React from 'react'

const Modal = ({onClick, children}) => {

    useEffect(() => {
        const handleKeyDown = e => {
            if(e.code === "Escape") {
            onClick()
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => { 
            window.removeEventListener("keydown", handleKeyDown);
        }
    },[onClick])
        
    const handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            onClick();
        }
    };
    return (
        <div className={css.overlay} onClick={handleBackdropClick}>
                <div className={css.modal}>
                    {children}

                </div>
            </div>
    )
}

export default Modal
    

    

// export default class Modal extends Component{

//     componentDidMount() {
//         window.addEventListener("keydown", this.handleKeyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener("keydown", this.handleKeyDown);
//     }
//     handleKeyDown = e => {
//         if(e.code === "Escape") {
//         this.props.onClick()
//         }
//     }

//     handleBackdropClick = e => {
//         if(e.currentTarget === e.target) {
//             this.props.onClick();
//         }
//     };

//     render() {

//         return(
//             <div className={css.overlay} onClick={this.handleBackdropClick}>
//                 <div className={css.modal}>
//                     {this.props.children}
//                     {/* <img src={largeImageURL} alt={tags} /> */}
//                 </div>
//             </div>
//         )
//     }
// }


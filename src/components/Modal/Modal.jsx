import { Component } from "react";
import css from "./Modal.module.css";


export default class Modal extends Component{

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }
    handleKeyDown = e => {
        if(e.code === "Escape") {
        this.props.onClick()
        }
    }

    handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClick();
        }
    };

    render() {
        // const {largeImageURL, tags} =this.props
        return(
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    {this.props.children}
                    {/* <img src={largeImageURL} alt={tags} /> */}
                </div>
            </div>
        )
    }
}


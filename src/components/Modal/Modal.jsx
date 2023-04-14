import { Component } from "react";
import css from "./Modal.module.css";

export default class Modal extends Component{
    componentDidMount() {
        console.log("Modal componentDidMount")
        window.addEventListener("keydown", e => {
            if(e.code === "Escape") {
                this.props.onClose()
            }
        })
    }
    render() {
        return(
            <div className={css.overlay}>
                <div className={css.modal}>
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
}


import {Component} from "react";
import css from "./Button.module.css"

class Button extends Component {
    render () {
        const {isVisibleBtn} = this.props;
        return (
            <>
                {isVisibleBtn && 
                <button type="button"
                    className={css["loadMoreBtn"]} 
                    onClick={this.props.onLoadMore}
                    >Load more</button> }     
            </>   
        ) 
    }
}
export default Button;

import {Component} from "react";

class Button extends Component {
    render () {
        const {isVisibleBtn} = this.props;
        return (
            <>
                {isVisibleBtn && 
                <button type="button"
                    className="loadMoreBtn" 
                    onClick={this.props.onLoadMore}
                    >Load more</button>} 
            </>   
        ) 
    }
}
export default Button;

import React from 'react'
import css from "./Button.module.css"

const Button = ({isVisibleBtn, onLoadMore}) => {

return (
        <>
        {isVisibleBtn && 
        <button type="button"
                className={css["loadMoreBtn"]} 
                onClick={onLoadMore}>Load more
        </button> } 
        </>
        )
}

export default Button ;


// class Button extends Component {
//     render () {
//         const {isVisibleBtn} = this.props;
//         return (
//             <>
//                 {isVisibleBtn && 
//                 <button type="button"
//                     className={css["loadMoreBtn"]} 
//                     onClick={this.props.onLoadMore}
//                     >Load more</button> }     
//             </>   
//         ) 
//     }
// }
// export default Button;
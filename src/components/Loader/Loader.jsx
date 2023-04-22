import React from "react"
import css from "./Loader.module.css";
import {BallTriangle } from "react-loader-spinner"


const Loader = () => {
    return (
        <div className={css.loader}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    )
}

export default Loader;


// class Loader extends React.Component {
//     render() {
//         return (
//         <div className={css.loader}>
//             <BallTriangle
//                 height={100}
//                 width={100}
//                 radius={5}
//                 color="#4fa94d"
//                 ariaLabel="ball-triangle-loading"
//                 wrapperClass={{}}
//                 wrapperStyle=""
//                 visible={true}
//             />
//         </div>
// )}}

// export default Loader;







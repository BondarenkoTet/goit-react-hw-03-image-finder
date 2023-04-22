import { useState} from "react";
import { toast } from "react-toastify";
import css from "./Searchbar.module.css"

import React from 'react'

const Searchbar = ({createSearchImg}) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const handleSubmit = event =>{
        event.preventDefault();
        
        if(value.trim() === "") {
            toast.error("Please enter a search value!")
            return
        } 
        createSearchImg(value);
        reset();
    };

    const reset = () => setValue ("");
    
    return (
        <header className={css.header}>
                <form className={css.form} onSubmit={handleSubmit}>
                    <button type="submit" className={css.btn}>
                        <span className="button-label">Search</span>
                    </button>

                <input
                    className={css.input}
                    type="text"
                    //autocomplete="off"
                    // autofocus
                    placeholder="Search images and photos"
                    name= "value"
                    onChange ={handleChange}
                    value= {value}
                />
                </form>
            </header>    
    )
}

export default Searchbar;
    




// class Searchbar extends Component {
//     state ={
//         value: "",
//     };
    

//     handleChange = ({target:{value} }) => {
//         this.setState({value})
//     };
//     handleSubmit = e =>{
//         e.preventDefault();
        
//         if(this.state.value.trim() === "") {
//             toast.error("Please enter a search value!")
//             return
//         } 
//         this.props.createSearchImg(this.state.value)
//         this.reset()
//     }
//     reset () {
//         this.setState({value: ""})
//     }
//     render() {
//         return(
//             <header className={css.header}>
//                 <form className={css.form} onSubmit={this.handleSubmit}>
//                     <button type="submit" className={css.btn}>
//                         <span className="button-label">Search</span>
//                     </button>

//                 <input
//                     className={css.input}
//                     type="text"
//                     //autocomplete="off"
//                     // autofocus
//                     placeholder="Search images and photos"
//                     name= "value"
//                     onChange ={this.handleChange}
//                     value= {this.state.value}
//                 />
//                 </form>
//             </header>
//         )
//     }
// }
// export default Searchbar;
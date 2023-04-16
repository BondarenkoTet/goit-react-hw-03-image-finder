import { Component} from "react";
import { toast } from "react-toastify";
import css from "./Searchbar.module.css"

class Searchbar extends Component {
    state ={
        value: "",
    };
    

    handleChange = ({target:{value} }) => {
        this.setState({value})
    };
    handleSubmit = e =>{
        e.preventDefault();
        // if(this.state.value !== this.props.currentValue) {
        //     this.props.getCurrentFetchValue(this.state.value);
        // }
        if(this.state.value.trim() === "") {
            toast.error("Please enter a search value!")
            return
        } 
        this.props.createSearchImg(this.state.value)
        this.reset()
    }
    reset () {
        this.setState({value: ""})
    }
    render() {
        return(
            <header className={css.header}>
                <form className={css.form} onSubmit={this.handleSubmit}>
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
                    onChange ={this.handleChange}
                    value= {this.state.value}
                />
                </form>
            </header>
        )
    }
}
export default Searchbar;
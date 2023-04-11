import { Component } from "react";
import { ToastContainer } from "react-toastify"
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { getImg } from "services/fetch";


export default class App extends Component{
  state ={
    value: "",
    searchImg: null,
    isloader: false,
    page: 1,
    
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchImg !== this.state.searchImg) {
              console.log("change name")
              console.log("prevState.searchImg:", prevState.searchImg)
              console.log("this.state.searchImg", this.state.searchImg)
    this.setState({loader: true}) ;
    getImg(this.state.value, this.state.page)
    .then(console.log)
    }
  }
  
  createSearchImg = (searchImg) => {
    this.setState({searchImg})
  }

  render() {
    return(
      <div>
        <Searchbar createSearchImg={this.createSearchImg}/>
        <ToastContainer autoClose={3000} />
        <ImageGallery searchImg={this.state.searchImg}/>
      </div>
    )
  };
    
};




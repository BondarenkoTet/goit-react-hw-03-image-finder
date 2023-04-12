import { Component } from "react";
import { ToastContainer } from "react-toastify"
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { getImg } from "services/fetch";


export default class App extends Component{
  state ={
    searchImg: null,
    isloader: false,
    page: 1,
    images: null,
    
  }
  componentDidUpdate(prevProps, prevState) {
    const {searchImg, page} = this.state;
    if(prevState.searchImg !== this.state.searchImg) {
    this.setState({isloader: true}) 
    getImg(searchImg, page)
    .then( data => this.setState({
        images: data.data.hits,      
        isloader: false
      }))
    }
  }

  createSearchImg = (searchImg) => {
    this.setState({searchImg})
  }


  render() {
    return(
      <div>
        <Searchbar createSearchImg={this.createSearchImg}
        />
        <ToastContainer autoClose={3000} />
        <ImageGallery searchImg={this.state.searchImg} 
            images={this.state.images}/>
      </div>
    )
  };
    
}




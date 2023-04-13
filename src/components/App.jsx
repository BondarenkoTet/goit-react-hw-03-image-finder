import { Component } from "react";
import { ToastContainer } from "react-toastify"
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { getImg } from "services/fetch";
import Button from "./Button";

export default class App extends Component{
  state ={
    searchImg: null,
    isloader: false,
    page: 1,
    images: null,
    isVisibleBtn :false,
    
  }
  componentDidUpdate(prevProps, prevState) {
    const {searchImg, page} = this.state;
    if(prevState.searchImg !== searchImg || prevState.page !== page) {
    this.setState({isloader: true}) 
    getImg(searchImg, page)
    .then( data => this.setState({
        images: data.data.hits,      
        isloader: false,
        isVisibleBtn: true,
      }))
    }
  }
  createSearchImg = (searchImg) => {
    this.setState({searchImg})
  }
  
  onLoadMore =() => {
    //this.setState(prev => ({page: prev.page + 1}))

    const nextPage = this.state.page +1;
    getImg (this.state.searchImg, nextPage).then(data =>{
      if(data.data.hits.length === 0) {
            this.setState({isVisibleBtn: false})
            alert("no more photo")
            console.log(data)
          }
        }) 
  }

// resetPage = () => {
//       this.setState({ page: 1 });
//     };

  render() {
    return(
      <div>
        <Searchbar createSearchImg={this.createSearchImg}
        />
        <ToastContainer autoClose={3000} />
        <ImageGallery 
          searchImg={this.state.searchImg} 
          images={this.state.images}
          isloader={this.state.isloader}
        />
        <Button 
          isVisibleBtn={this.state.isVisibleBtn}
          onClick={this.state.onLoadMore}
        />
      </div>
    )
  };
    
}




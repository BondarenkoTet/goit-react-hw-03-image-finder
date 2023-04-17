import { Component } from "react";
import { ToastContainer } from "react-toastify"
import Searchbar from "./SearchBar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { getImg } from "services/fetch";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";


export default class App extends Component{
  state ={
    searchImg: null,
    isloader: false,
    page: 1,
    images: null,
    isVisibleBtn :false,
    isEmpty: false, 
  }
  componentDidUpdate(_, prevState) {
    const {searchImg, page} = this.state;

    if(prevState.searchImg !== searchImg || prevState.page !== page) {
    this.setState({isloader: true}) 

    getImg(searchImg, page)
    .then( data => {

      if(data.data.hits.length < 1) {
        this.setState({
          isEmpty: true,
          isVisibleBtn: false,
        })} else {
          this.setState(prev => ({
          images: [...prev.images, ...data.data.hits],
          isloader: false,
          isVisibleBtn: true}))
        }
  })
  .catch(error => this.setState({error: true}));
  }
  }
  
  createSearchImg = (searchImg) => {
    this.setState({searchImg, images: [], page: 1})
  }

  onLoadMore =() => {
    this.setState(prevState => ({page: prevState.page + 1}));
        
  }

  render() {
    const {searchImg, images, isloader, isVisibleBtn, 
        isEmpty} = this.state
    return (
      <div>
        <Searchbar createSearchImg={this.createSearchImg}
        />
        <ToastContainer autoClose={3000} />
        <ImageGallery 
          searchImg={searchImg} 
          images={images}
          //isloader={isloader}
          isEmpty={isEmpty}
        />
        <Button 
          isVisibleBtn={isVisibleBtn}
          onLoadMore={this.onLoadMore}
        />
        {isloader && <Loader height={"100"} width={"100"}></Loader> }
      </div>
    )
  };
    
}




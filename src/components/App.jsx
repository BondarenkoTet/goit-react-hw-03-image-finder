import { Component } from "react";
import { ToastContainer } from "react-toastify"
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { getImg } from "services/fetch";
import Button from "./Button";
import Modal from "./Modal/Modal"

export default class App extends Component{
  state ={
    searchImg: null,
    isloader: false,
    page: 1,
    images: null,
    isVisibleBtn :false,
    showModal: false,
    isEmpty: false
  }
  componentDidUpdate(_, prevState) {
    const {searchImg, page} = this.state;
    if(prevState.searchImg !== searchImg || prevState.page !== page) {
    this.setState({isloader: true}) 
    getImg(searchImg, page)
    .then( data => {this.setState({
        images: data.data.hits,      
        isloader: false,
        isVisibleBtn: true,
    });
  })
  .catch(error => this.setState({error: true}));
  }

  if([this.images].length < 1) {
    this.setState({
      isEmpty: true , 
      isVisibleBtn: false,
    })} 
    // this.setState(prevState => ({
    // images: [...prevState.images, ...searchImg]
    // }))
  }
  
  createSearchImg = (searchImg) => {
    this.setState({searchImg, images: [], page: 1})
  }

  onLoadMore =() => {
    this.setState(prevState => ({page: prevState.page + 1}));
        
  }
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  render() {
    const {searchImg, images, isloader, isVisibleBtn, 
      showModal, isEmpty} = this.state
    return (
      <div>
        <Searchbar createSearchImg={this.createSearchImg}
        />
        <ToastContainer autoClose={3000} />
        <ImageGallery 
          searchImg={searchImg} 
          images={images}
          isloader={isloader}
          isEmpty={isEmpty}
        />
        <Button 
          isVisibleBtn={isVisibleBtn}
          onLoadMore={this.onLoadMore}
        />
        {showModal && <Modal onClose={this.toggleModal}/>}  
      </div>
    )
  };
    
}




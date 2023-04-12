import { Component } from 'react';
//import { getImg } from "services/fetch"ж
import { ImageGalleryItem } from './ImageGalleryItem';

class ImageGallery extends Component{
    state = {
        //value: "",
        images: [],
        // isloding: false,
        // page:1,
    }


    // const searchImg = this.props.searchImg.trim()
//if(prevProps.searchImg !== searchImg && searchImg) {
    //         this.setState({isloding: true})




    render() {
        const {images, isloding} = this.state
        return (
            <> 
            {isloding && <h2>Loading...</h2>}
            {images && (
            <ul className="gallery">
                {images.map((image) => (
                    <ImageGalleryItem 
                        image ={image.pageURL}
                        key={image.id}
                    />
                    
                // <li key={image.id} className="gallery-item">
                //     <img src={image.pageURL} alt={image.tags} />
                // </li>
                ))}
            </ul>
            )}
            </>
        )
    }
}
    export default ImageGallery;
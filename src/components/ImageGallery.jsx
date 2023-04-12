import { Component } from 'react';
import { ImageGalleryItem } from "./ImageGalleryItem"

class ImageGallery extends Component{
    state = {
        //value: "",
        images: [],
        isloader: false,
        // page:1,
    }

    render() {
        const {images, isloader} = this.state;
        return (
            <> 
            {isloader && <h2>Loading...</h2>}
            {images && (
            <ul className="gallery">
                {images.map((image) => {
                   // const {id, alt: {tags}, src:{pageURL}} = image;
                    return (
                        // <li key={id} className="gallery-item">
                        //     <img src={pageURL} alt={tags} />
                        // </li>



                    <ImageGalleryItem 
                        // key = {id}
                        // tags = {tags}
                        // src = {pageURL}
                        // largeImageURL = {largeImageURL}
                    />
                    )
            })}
            </ul>
            )}
            </>
        )
    }
}
    export default ImageGallery;
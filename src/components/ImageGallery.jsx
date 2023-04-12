import { Component } from 'react';
import { ImageGalleryItem } from "./ImageGalleryItem"

class ImageGallery extends Component{
    state = {
        images: [],
        isloader: false,
    }

    render() {
        const {images, isloader} = this.state;
        return (
            <> 
            {isloader && <h2>Loading...</h2>}
            {images && (
            <ul className="gallery">
                {images.map(({id, webformatURL, tags, largeImageURL}) => (
            
                    <ImageGalleryItem 
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    />
            ))}
            </ul>
            )}
            </>
        )
    }
}
    export default ImageGallery;
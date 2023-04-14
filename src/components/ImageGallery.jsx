import { Component } from 'react';
import { ImageGalleryItem } from "./ImageGalleryItem"

class ImageGallery extends Component{
    
    render() {
        const {images, isloader, isEmpty} = this.props;
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
            {isEmpty && <p>"Sorry! There are no images..."</p>}
            
            </>
        )
    }
}
    export default ImageGallery;
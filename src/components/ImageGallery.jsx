import { Component } from 'react';
import { ImageGalleryItem } from "./ImageGalleryItem"
//import Button from "./Button";

class ImageGallery extends Component{
    
    render() {
        const {images, isloader} = this.props;
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

            
        {/* {isVisibleBtn && <Button 
            isVisibleBtn={this.state.isVisibleBtn}
            onClick={this.props.onLoadMore}>Load more</Button>} */}
            
            </>
        )
    }
}
    export default ImageGallery;
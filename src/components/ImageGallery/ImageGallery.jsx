import React from 'react';
import  ImageGalleryItem  from "../GalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"



const ImageGallery = ({images, isloader, isEmpty}) => {
        
    return (
        <div>
            {isloader && <h2>Loading...</h2>}
            {images && (
            <ul className={css.gallery}>
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
        </div>
    )
}

export default ImageGallery
    


    // class ImageGallery extends Component{
    
    //     render() {
    //         const {images, isloader, isEmpty} = this.props;
    //         return (
    //             <> 
    //             {isloader && <h2>Loading...</h2>}
    //             {images && (
    //             <ul className={css.gallery}>
    //                 {images.map(({id, webformatURL, tags, largeImageURL}) => (
                
    //                     <ImageGalleryItem 
    //                     key={id}
    //                     webformatURL={webformatURL}
    //                     tags={tags}
    //                     largeImageURL={largeImageURL}
    //                     />
    //                     ))}
    //             </ul>
    //             )}
    //             {isEmpty && <p>"Sorry! There are no images..."</p>}
                
    //             </>
    //         )
    //     }
    // }
    //     export default ImageGallery;
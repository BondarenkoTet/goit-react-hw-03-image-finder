
export const ImageGalleryItem = ({id, webformatURL, largeImageURl, tag}) => {
    return  <li key={id} className="gallery-item">
            <img src={webformatURL} alt={tag} />
            </li>
}

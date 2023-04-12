import { Component } from "react";

export const ImageGalleryItem = ({id, pageURL, previewURl, tags}) => {
    return  <li key={id} className="gallery-item">
            <img src={pageURL} alt={tags} />
            </li>
}

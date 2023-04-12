import { Component } from "react";

export class ImageGalleryItem extends Component {
    state ={
}

    render() {
        return(
            <li key={this.props.id} className="gallery-item">
            <img src={this.props.webformatURL} 
                alt={this.props.tags} />
            </li> 
        )
    } 
}


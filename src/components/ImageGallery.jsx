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
    

    
    
    
    
    

// fetch(`https://pixabay.com/api/?q=${this.props.searchImg}&page=1&key=33736384-d824c34936f956644527773fb&image_type=photo&orientation=horizontal&per_page=12`)
// .then(res => res.json())
// .then(console.log)
       // getImg(this.props.searchImg)
    //    getImg().then(response => console.log(response))
    //     }




    // const searchImg = this.props.searchImg.trim()
//if(prevProps.searchImg !== searchImg && searchImg) {
    //         this.setState({isloding: true})


                //  getImg(this.value, this.state.page).then(({hits}) => {
                //      this.setState({images: hits})
                //  })
    //             .finally(() => {
    //                 this.setState({isloding: false})
    //                 //console.log()
    //             }) 
    //     }
    //}


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
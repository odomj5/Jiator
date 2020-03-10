import React from 'react'
import PhotoThumbnail from "./photo_thumbnail"

class PhotoMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPhoto: 0
        }
        this.selectPhoto = this.selectPhoto.bind(this)
    }

    selectPhoto(num) {
        this.setState({selectedPhoto: num})
    }


    render () {
        return(
        <div className="photo-main-div">
            <PhotoThumbnail 
                selected={this.state.selectedPhoto}
                photos={this.props.photos}
                selectedPhoto={this.state.selectedPhoto}
                selectPhoto={this.selectPhoto}
            />
            <div className="large-pic-container">
                <img className="large-pic" src={this.props.photos[this.state.selectedPhoto]} />
            </div>
        </div>
        )
        
    }

}

export default PhotoMain
import React from 'react'

class PhotoMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: this.props.photoUrls,
            selectedPhoto: 0
        }
    }

    selectPhoto(num) {
        this.setState({selectPhoto: num})
    }


    render () {
        // debugger
        return(
        <div className="photo-main-div">
            <li>{this.props.photos.map((pic, idx) => (<img key={idx} src={pic}/>))}</li>
            
        </div>
        )
        
    }

}

export default PhotoMain
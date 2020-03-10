import React from 'react'

class PhotoThumbnail extends React.Component {

    render() {


        return(
            <div className="photo-thumbnail">
                {this.props.photos.map((pic, idx) => (
                    <img 
                        key={idx} 
                        src={pic}
                        onClick={() => this.props.selectPhoto(idx)}
                        className={this.props.selected === idx ? "" : "not-selected-photo"}
                />))}


            </div>
        )

    }

}

export default PhotoThumbnail
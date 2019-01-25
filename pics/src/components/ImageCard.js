import React from 'react';

class ImageCard extends React.Component {
    imageRef = React.createRef();

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div className="image-card">
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;
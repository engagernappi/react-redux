import React from 'react';

class ImageCard extends React.Component {
    imageRef = React.createRef();
    state = { spans: 0 };

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div className="image-card" style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;
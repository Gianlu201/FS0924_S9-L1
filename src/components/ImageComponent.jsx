import { Component } from 'react';

class ImgComponent extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImgComponent;

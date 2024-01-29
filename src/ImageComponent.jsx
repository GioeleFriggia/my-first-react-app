// ImageComponent.js
import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, alt } = this.props;

    return (
      <div>
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: "900px", height: "auto" }} // Modifica le dimensioni come desideri
        />
      </div>
    );
  }
}

export default ImageComponent;

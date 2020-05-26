import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({foundImages}) => {

    const pictures = foundImages.map(image => {return <ImageCard img key={image.id} image={image}  />
    });
    return (
        <div className="image-list">
            {pictures}
        </div>
    )
}
export default ImageList;
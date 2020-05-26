import React, { useEffect, useState } from "react";

const ImageCard = ({image}) => {
    const imgRef = React.useRef();
    const [spanSize, setSpanSize] = useState(0);

    useEffect(() => {
        imgRef.current.addEventListener("load", setSpans);
        return () => {
            imgRef.current.removeEventListener("load", setSpans);
        };
    }, []);

    const setSpans = () => {
        const height = imgRef.current.clientHeight;

        setSpanSize(Math.ceil(height / 10 + 1));
    }


    const {description, urls} = image;
    return(
        <div style={{ gridRowEnd: `span ${spanSize}`}}>
            <img
                ref={imgRef}
                alt={description}
                src={urls.regular}
            />
        </div>
    );
}

export default ImageCard;
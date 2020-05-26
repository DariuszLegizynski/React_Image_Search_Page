import React, { useEffect } from "react";

const ImageCard = ({image}) => {
    const imgRef = React.useRef();

    useEffect(() => {
        imgRef.current.addEventListener("load", setSpans);
        return () => {
            imgRef.current.removeEventListener("load", setSpans);
        };
    }, []);

    const setSpans = () =>{
        console.log(imgRef.current.clientHeight);
    }


    const {description, urls} = image;
    return(
        <div>
            <img
                ref={imgRef}
                alt={description}
                src={urls.regular}
            />
        </div>
    );
}

export default ImageCard;
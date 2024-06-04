import { useCallback, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = useCallback(async function (getUrl) {
        try {
            setLoading(true);

            // const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            // const data = await response.json();
            const data = [
                {
                    id: 1,
                    download_url: ""
                },
                {
                    id: 2,
                    download_url: ""
                },
                {
                    id: 3,
                    download_url: ""
                },
                {
                    id: 4,
                    download_url: ""
                },
                {
                    id: 5,
                    download_url: ""
                },
            ]
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }, [page, limit]);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url, fetchImages]);

    console.log(images);

    if (loading) {
        return <div>Loading data ! Please wait</div>;
    }

    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>;
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className="arrow arrow-left"
            />
            {images && images.length
                ? images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={
                            currentSlide === index
                                ? "current-image"
                                : "current-image hide-current-image"
                        }
                    />
                ))
                : null}
            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right"
            />
            <span className="circle-indicators">
                {images && images.length
                    ? images.map((_, index) => (
                        <button
                            key={index}
                            className={
                                currentSlide === index
                                    ? "current-indicator"
                                    : "current-indicator inactive-indicator"
                            }
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))
                    : null}
            </span>
        </div>
    );
}
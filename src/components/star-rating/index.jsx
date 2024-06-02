import { useState } from "react";
import { FaStar } from "react-icons/fa"
export default function StarRating({ noOfStarts = 5 }) {
    const [rate, setRate] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRate(index);
    }

    function handleMouseOver(index) {
        setHover(index);
    }

    function handleMouseLeave() {
        setHover(0);
    }
    return (
        <div className="star-rating">
            {[...Array(noOfStarts)].map((_, index) => {
                index++;
                let color = "";
                if (hover !== 0 && index <= hover) {
                    color = "yellow";
                } else if (index <= rate) {
                    color = "green";
                }

                return <FaStar
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseOver(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                    color={color}
                />
            })}
        </div>
    )
}

import './slides.css';

import React, {
    useEffect,
    useState,
} from 'react';

import PropTypes from 'prop-types';

const Slides = ({ images, interval }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const tick = setInterval(() => {
            if (activeIndex < images.length - 1) {
                setActiveIndex(activeIndex + 1);
            } else {
                setActiveIndex(0);
            }
        }, interval);

        return () => clearInterval(tick);
    }, [activeIndex, images.length, interval]);

    return (
        <div className="Slide">
            <div className="Slide_Container">
                {images.map((image, index) => (
                    <img
                        alt={image.title}
                        className={
                            index === activeIndex
                                ? "Slide_Container_Img animaShow"
                                : "Slide_Container_Img animaHide"
                        }
                        key={index}
                        src={image.src}
                    />
                ))}
                <div className="Slide_Container_Title">
                    {images[activeIndex].title}
                </div>
            </div>
        </div>
    );
};

Slides.defaultProps = {
    images: [],
    interval: 5000,
};

Slides.propTypes = {
    interval: PropTypes.number,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};

export default Slides;

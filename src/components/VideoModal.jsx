import React, { useEffect, useRef, useState } from 'react';
import './VideoModal.css';

const VideoModal = ({ videoSrc, onClose }) => {
    const [modalTop, setModalTop] = useState(0);
    const [modalLeft, setModalLeft] = useState(0);
    const [modalWidth, setModalWidth] = useState(0);
    const [modalHeight, setModalHeight] = useState(0);
    const videoModalRef = useRef(null);

    const handleResize = () => {
        const width = window.innerWidth || document.documentElement.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight;

        const modalWidth = videoModalRef.current.offsetWidth;
        const modalHeight = videoModalRef.current.offsetHeight;

        setModalTop((height - modalHeight) / 2);
        setModalLeft((width - modalWidth) / 2);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    return (
        <div
            ref={videoModalRef}
            className="video-modal"
            style={{
                top: `${modalTop + scrollTop}px`,
            }}
        >
            <div className="video-container">
                <button className="close-button" onClick={onClose}>Exit</button>
                <video controls autoPlay>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default VideoModal;
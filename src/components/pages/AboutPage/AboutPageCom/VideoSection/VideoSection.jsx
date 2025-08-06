import React, { useRef, useState, useEffect } from "react";
import "./VideoSection.css";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VideoSection() {
  // Reference to the video DOM element
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // State to track whether the video is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // State to control visibility of the custom play/pause button
  const [showControls, setShowControls] = useState(true);
  const [isVisible, setIsVisible] = useState(false); 

  // Toggle play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowControls(false);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  // Mouse events
  const handleMouseEnter = () => {
    setShowControls(true);
  };

  // Hide control button on mouse leave if video is playing
  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  // Scroll animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-section">
      <div
        ref={containerRef}
        className={`video-container ${isVisible ? "video-visible" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="responsive-video"
          src="/video/661e04539d8c67c185503efc_2141629_Homemade_Eating_Cooking_1920x1080-transcode.mp4"
          muted
          loop
          playsInline
        />
        {/* Show play/pause button only when showControls is true */}
        {showControls && (
          <button className="custom-play-button" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        )}
      </div>
    </section>
  );
}

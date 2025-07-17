import React, { useRef, useState } from "react";
import "./VideoSection.css";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VideoSection() {
  // Reference to the video DOM element
  const videoRef = useRef(null);

  // State to track whether the video is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // State to control visibility of the custom play/pause button
  const [showControls, setShowControls] = useState(true);

  // Toggle video play/pause and update states accordingly
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowControls(false); // hide button after playing
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true); // show button when paused
    }
  };

  // Show control button when mouse enters the video area
  const handleMouseEnter = () => {
    setShowControls(true);
  };

  // Hide control button on mouse leave if video is playing
  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  return (
    <section className="video-section">
      <div
        className="video-container"
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

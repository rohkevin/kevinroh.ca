import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context';
import './DemoVideo.scss'

function DemoVideo({ id, clip, videoModal }) {
  const { windowSize } = useGlobalContext();
  const [videoWidth, setVideoWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (windowSize > 1281) {
      setVideoWidth(1200)
    }
  }, [])

  if (id && clip && videoModal) {
    return (
      <video width={videoWidth} height="auto" autoPlay controls>
        <source src={`${process.env.PUBLIC_URL}/assets/Images/Projects/${id}${clip}`} type="video/mp4" />
      </video>
    )
  } else {
    return (
      <p>No demo for this one!</p>
    )
  }
}

export default DemoVideo

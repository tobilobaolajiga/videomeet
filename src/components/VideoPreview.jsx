import { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
export default function VideoPreview({
  isVideoOn,
  isAudioOn,
  setIsVideoOn,
  setIsAudioOn,
  displayName,
  vidImg,
  setVidImg,
  micImg,
  setMicImg,
}) {
  const videoRef = useRef();
  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
    showMicImg();
  };
  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    showVidImg();
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    const enableVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: isVideoOn,
          audio: isAudioOn,
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing user media:', error);
      }
    };
    enableVideoStream();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isVideoOn, isAudioOn]);

  const showMicImg = () => {
    if (isAudioOn === false) {
      setMicImg('/mic.svg');
    } else if (isAudioOn === true) {
      setMicImg('/micOff.svg');
    }
  };

  const showVidImg = () => {
    if (isVideoOn === false) {
      setVidImg('/video.svg');
    } else if (isVideoOn === true) {
      setVidImg('/vidOff.svg');
    }
  };

  return (
    <div>
      <div className="">
        <div>
          {!isVideoOn ? (
            <div className="relative">
              <div className="lg:ml-[90px] mt-8 relative rounded-lg lg:my-[50px] bg-black w-[300px] h-[300px] lg:w-[630px] lg:h-[500px]">
                <img
                  src="/avatar.svg"
                  alt=""
                  className="absolute left-[75px] top-8 lg:top-[180px] lg:left-[230px] rounded-full z-50 bg-white py-2 px-2 border-none"
                  width={150}
                />
              </div>
              <div className="absolute flex left-[90px] bottom-[20px] lg:bottom-[50px] lg:left-[330px] gap-4 items-center">
                <button>
                  <img src={micImg} alt="" width={50} onClick={toggleAudio} />
                </button>
                <button>
                  {' '}
                  <img src={vidImg} alt="" width={50} onClick={toggleVideo} />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                {' '}
                <Webcam
                  ref={videoRef}
                  autoPlay
                  mirrored
                  className="lg:ml-[90px] mt-8 rounded-lg relative sm:w-[300px]  md:w-[500px]
                  h-[300px] lg:w-[630px] lg:h-[500px]"
                />
              </div>

              <div className=" absolute flex top-[230px] lg:top-[450px] sm:left-[200px]  md:left-[330px] gap-4 items-center mb-6">
                <button>
                  <img src={micImg} alt="" width={50} onClick={toggleAudio} />
                </button>
                <button>
                  {' '}
                  <img src={vidImg} alt="" width={50} onClick={toggleVideo} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

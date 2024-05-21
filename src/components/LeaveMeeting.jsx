import { useNavigate } from 'react-router-dom';
export default function LeaveMeeting({
  setIsAudioOn,
  setIsVideoOn,
  isAudioOn,
  isVideoOn,
}) {
  const navigate = useNavigate();
  const leaveMeeting = () => {
    // setIsAudioOn(false);
    // setIsVideoOn(false);
    // if (isVideoOn) {
    // }
    navigate('/leave');
  };
  return (
    <div className="absolute w-fit lg:bottom-4 top-4 left-[20px] lg:right-[20px]">
      <button
        className="bg-[red] rounded text-white text-center py-2 px-4 font-medium "
        onClick={leaveMeeting}
      >
        Leave Meeting
      </button>
    </div>
  );
}

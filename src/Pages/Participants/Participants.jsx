import PartHeader from './PartHeader';
import PartList from './PartList';
import ParticipantsMenu from './ParticipantsMenu';
import ParticipantsNav from './ParticipantsNav';

export default function Participants() {
  return (
    <div className="flex">
      <ParticipantsMenu />
      <div className="w-full">
        <ParticipantsNav />
        <PartHeader />
        <PartList />
      </div>
    </div>
  );
}

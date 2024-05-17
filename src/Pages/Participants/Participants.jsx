import PartHeader from './PartHeader';
import PartList from './PartList';
import ParticipantsMenu from './ParticipantsMenu';
import ParticipantsNav from './ParticipantsNav';

export default function Participants() {
  return (
    <div className="flex">
      <div className="w-1/5">
        <ParticipantsMenu />
      </div>

      <div className="w-full ml-12">
        <div>
          <ParticipantsNav />
        </div>

        <PartHeader />
        <PartList />
      </div>
    </div>
  );
}

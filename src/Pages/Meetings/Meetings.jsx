import MeetingsHeader from './MeetingsHeader';
import MeetingsMenu from './MeetingsMenu';
import MeetingsNav from './MeetingsNav';

export default function Meetings() {
  return (
    <div className="flex">
      <div className="w-1/5">
        <MeetingsMenu />
      </div>

      <div className="w-full ml-12">
        <div>
          <MeetingsNav />
        </div>

        <MeetingsHeader />
        {/* <PartList /> */}
      </div>
    </div>
  );
}

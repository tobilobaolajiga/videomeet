import ArcGraph from './ArcGraph';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import DashboardMenu from './DashboardMenu';
import LineChart from './LineChart';
import RecentMeetings from './RecentMeetings';
import SquareGraphs from './SquareGraphs';

export default function Dashboard() {
  return (
    <div className="flex">
      <DashboardMenu />
      <div className="w-full">
        <DashNav />
        <DashHeader />
        <SquareGraphs />
        <div className="flex">
          <LineChart />
          <ArcGraph />
        </div>
        <RecentMeetings />
      </div>
    </div>
  );
}

import ArcGraph from '../MainDashboard/ArcGraph';
import LineChart from '../MainDashboard/LineChart.jsx';

import RecentMeetings from '../MainDashboard/RecentMeetings';

import BarChart from './BarChart.jsx';
import FeatureUsage from './FeatureUsage.jsx';
import PartInteraction from './PartInteraction.jsx';
import ReportsHeader from './ReportsHeader.jsx';
import ReportsMenu from './ReportsMenu';
import ReportsNav from './ReportsNav';
import ReportsSquare from './ReportsSquare.jsx';

export default function Reports() {
  return (
    <div className="flex">
      <ReportsMenu />
      <div className="w-full">
        <ReportsNav />
        <ReportsHeader />
        <ReportsSquare />
        <div>
          <BarChart />
        </div>
        <div className="flex">
          <PartInteraction />
          <FeatureUsage />
        </div>
      </div>
    </div>
  );
}

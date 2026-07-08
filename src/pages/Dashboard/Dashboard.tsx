import Sidebar from "../../components/Sidebar/Sidebar";
import WorkCalendar from "../../components/Calendar/WorkCalendar";
import RightPanel from "../../components/RightPanel/RightPanel";
import BottomToolbar from "../../components/BottomToolbar/BottomToolbar";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboardPage">
            <div className="dashboardShell">
                <div className="dashboardGrid">
                    <Sidebar />
                    <WorkCalendar />
                    <RightPanel />
                </div>

                <BottomToolbar />
            </div>
        </div>
    );
}
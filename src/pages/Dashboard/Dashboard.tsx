import Sidebar from "../../components/Sidebar/Sidebar";
import WorkCalendar from "../../components/Calendar/WorkCalendar";
import RightPanel from "../../components/RightPanel/RightPanel";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />

            <WorkCalendar />

            <RightPanel />
        </div>
    );
}
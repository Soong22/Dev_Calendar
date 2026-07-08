import {
    FaCalendarAlt,
    FaFolderOpen,
    FaRegCheckCircle,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";

type SidebarProps = {};

const calendars = ["Personal", "Shared"];
const projects = [
    { name: "Dev_Calendar", color: "blue" },
    { name: "OCR", color: "green" },
    { name: "Parser", color: "yellow" },
    { name: "QA", color: "red" },
];

const statuses = ["예정", "진행중", "완료", "보류"];

export default function Sidebar({ }: SidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <FaCalendarAlt />
                <span>Dev Calendar</span>
            </div>

            <div className={styles.section}>
                <h3>
                    <FaCalendarAlt />
                    Calendars
                </h3>
                {calendars.map((calendar) => (
                    <label className={styles.item} key={calendar}>
                        <input type="checkbox" defaultChecked />
                        <span>{calendar}</span>
                    </label>
                ))}
            </div>

            <div className={styles.section}>
                <h3>
                    <FaFolderOpen />
                    Projects
                </h3>
                {projects.map((project) => (
                    <label className={styles.item} key={project.name}>
                        <input type="checkbox" defaultChecked />
                        <span className={`${styles.dot} ${styles[project.color]}`} />
                        <span>{project.name}</span>
                    </label>
                ))}
            </div>

            <div className={styles.section}>
                <h3>
                    <FaRegCheckCircle />
                    Status
                </h3>
                {statuses.map((status) => (
                    <label className={styles.item} key={status}>
                        <input type="checkbox" defaultChecked />
                        <span>{status}</span>
                    </label>
                ))}
            </div>
        </aside>
    );
}
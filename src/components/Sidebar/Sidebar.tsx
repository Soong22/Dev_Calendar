import {
    FaCalendarAlt,
    FaFolderOpen,
    FaRegCheckCircle,
    FaUser,
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
                <span className={styles.logoIcon}>
                    <FaCalendarAlt />
                </span>

                <strong>Dev Calendar</strong>
            </div>

            <div className={styles.account}>
                <span className={styles.accountAvatar}>
                    <FaUser />
                </span>

                <span className={styles.accountName}>Soong</span>
            </div>

            <nav className={styles.navigation}>
                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                        <FaCalendarAlt />
                        Calendars
                    </h3>

                    <div className={styles.itemList}>
                        {calendars.map((calendar) => (
                            <label className={styles.item} key={calendar}>
                                <span className={styles.itemText}>{calendar}</span>

                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    defaultChecked
                                />
                            </label>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                        <FaFolderOpen />
                        Projects
                    </h3>

                    <div className={styles.itemList}>
                        {projects.map((project) => (
                            <label className={styles.item} key={project.name}>
                                <span
                                    className={`${styles.dot} ${styles[project.color]}`}
                                />

                                <span className={styles.itemText}>{project.name}</span>

                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    defaultChecked
                                />
                            </label>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                        <FaRegCheckCircle />
                        Status
                    </h3>

                    <div className={styles.itemList}>
                        {statuses.map((status) => (
                            <label className={styles.item} key={status}>
                                <span className={styles.itemText}>{status}</span>

                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    defaultChecked
                                />
                            </label>
                        ))}
                    </div>
                </section>
            </nav>
        </aside>
    );
}
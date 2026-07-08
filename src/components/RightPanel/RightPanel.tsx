import styles from "./RightPanel.module.css";

type RightPanelProps = {};

const todayTasks = [
    { project: "Dev_Calendar", title: "RightPanel UI 구현", time: "10:00 - 11:30" },
    { project: "Parser", title: "JSONL 오류 케이스 정리", time: "13:00 - 15:00" },
];

const completedTasks = [
    { project: "Dev_Calendar", title: "Sidebar UI 구현" },
    { project: "Dev_Calendar", title: "Design System 적용" },
];

const inProgressProjects = ["Dev_Calendar", "Parser"];

export default function RightPanel({ }: RightPanelProps) {
    return (
        <section className={styles.rightPanel}>
            <div className={styles.header}>
                <p className={styles.label}>Today</p>
                <h2>오늘 업무</h2>
            </div>

            <div className={styles.stats}>
                <div>
                    <strong>4</strong>
                    <span>전체</span>
                </div>
                <div>
                    <strong>2</strong>
                    <span>완료</span>
                </div>
                <div>
                    <strong>2</strong>
                    <span>진행중</span>
                </div>
            </div>

            <div className={styles.section}>
                <h3>오늘 할 일</h3>
                {todayTasks.map((task) => (
                    <article className={styles.taskCard} key={task.title}>
                        <span className={styles.project}>{task.project}</span>
                        <strong>{task.title}</strong>
                        <p>{task.time}</p>
                    </article>
                ))}
            </div>

            <div className={styles.section}>
                <h3>완료된 업무</h3>
                {completedTasks.map((task) => (
                    <article className={styles.completedCard} key={task.title}>
                        <span>✓</span>
                        <div>
                            <strong>{task.title}</strong>
                            <p>{task.project}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.notice}>
                <strong>진행 중인 프로젝트가 있습니다</strong>
                <p>{inProgressProjects.join(", ")}</p>
            </div>
        </section>
    );
}
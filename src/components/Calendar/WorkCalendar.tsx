import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./WorkCalendar.module.css";

type WorkCalendarProps = {};

const sampleEvents = [
    {
        id: "1",
        title: "Batch 처리",
        date: "2026-07-01",
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
    },
    {
        id: "2",
        title: "JSONL 오류 수정",
        date: "2026-07-07",
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
    },
    {
        id: "3",
        title: "데이터 수집",
        date: "2026-07-07",
        backgroundColor: "#22C55E",
        borderColor: "#22C55E",
    },
    {
        id: "4",
        title: "Parser 리팩터링",
        date: "2026-07-08",
        backgroundColor: "#22C55E",
        borderColor: "#22C55E",
    },
];

export default function WorkCalendar({ }: WorkCalendarProps) {
    return (
        <main className={styles.workCalendar}>
            <header className={styles.header}>
                <div className={styles.titleGroup}>
                    <p className={styles.label}>Calendar</p>

                    <div className={styles.monthNav}>
                        <button className={styles.navButton}>‹</button>
                        <h1>2026년 7월</h1>
                        <button className={styles.navButton}>›</button>
                        <button className={styles.todayButton}>오늘</button>
                    </div>
                </div>

                <div className={styles.actions}>
                    <div className={styles.viewTabs}>
                        <button className={styles.active}>월</button>
                        <button>주</button>
                        <button>일</button>
                        <button>목록</button>
                    </div>

                    <button className={styles.addButton}>+ 일정 추가</button>
                </div>
            </header>

            <section className={styles.calendarCard}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    initialDate="2026-07-01"
                    locale="ko"
                    height="auto"
                    headerToolbar={false}
                    events={sampleEvents}
                />
            </section>

            <section className={styles.detailArea}>
                <article className={styles.dayDetail}>
                    <div className={styles.detailHeader}>
                        <div>
                            <p className={styles.detailLabel}>Selected Day</p>
                            <h3>2026년 7월 7일</h3>
                        </div>

                        <span className={styles.countBadge}>2개의 일정</span>
                    </div>

                    <div className={styles.scheduleList}>
                        <button className={`${styles.scheduleItem} ${styles.scheduleItemActive}`}>
                            <span className={styles.time}>10:00</span>

                            <span className={styles.scheduleContent}>
                                <strong>JSONL 오류 수정</strong>
                                <small>Dev_Calendar · 진행중</small>
                            </span>

                            <span className={styles.projectDotBlue} />
                        </button>

                        <button className={styles.scheduleItem}>
                            <span className={styles.time}>15:00</span>

                            <span className={styles.scheduleContent}>
                                <strong>데이터 수집</strong>
                                <small>Parser · 예정</small>
                            </span>

                            <span className={styles.projectDotGreen} />
                        </button>
                    </div>
                </article>

                <article className={styles.eventDetail}>
                    <div className={styles.detailHeader}>
                        <div>
                            <p className={styles.detailLabel}>Selected Event</p>
                            <h3>JSONL 오류 수정</h3>
                        </div>

                        <span className={styles.statusBadge}>진행중</span>
                    </div>

                    <dl className={styles.eventInfo}>
                        <div>
                            <dt>프로젝트</dt>
                            <dd>
                                <span className={styles.projectDotBlue} />
                                Dev_Calendar
                            </dd>
                        </div>

                        <div>
                            <dt>시간</dt>
                            <dd>10:00 ~ 12:00</dd>
                        </div>

                        <div>
                            <dt>우선순위</dt>
                            <dd>보통</dd>
                        </div>

                        <div>
                            <dt>설명</dt>
                            <dd>FullCalendar 연동 과정에서 발견된 JSONL 오류를 수정합니다.</dd>
                        </div>
                    </dl>

                    <div className={styles.detailActions}>
                        <button className={styles.secondaryButton}>수정</button>
                        <button className={styles.primaryButton}>완료 처리</button>
                    </div>
                </article>
            </section>
        </main>
    );
}
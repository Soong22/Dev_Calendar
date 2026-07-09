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
                <div className={styles.dayDetail}>
                    <h3>7월 7일 (화)</h3>
                    <p>2개의 일정</p>

                    <div className={styles.detailItem}>
                        <span>10:00</span>
                        <strong>JSONL 오류 수정</strong>
                    </div>
                    <div className={styles.detailItem}>
                        <span>15:00</span>
                        <strong>데이터 수집</strong>
                    </div>
                </div>

                <div className={styles.eventDetail}>
                    <h3>상세 정보</h3>
                    <dl>
                        <div>
                            <dt>프로젝트</dt>
                            <dd>Dev_Calendar</dd>
                        </div>
                        <div>
                            <dt>상태</dt>
                            <dd>진행중</dd>
                        </div>
                        <div>
                            <dt>시간</dt>
                            <dd>2026-07-07 10:00 ~ 12:00</dd>
                        </div>
                        <div>
                            <dt>설명</dt>
                            <dd>FullCalendar 연동 테스트</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </main>
    );
}
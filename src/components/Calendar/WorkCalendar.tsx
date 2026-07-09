import styles from "./WorkCalendar.module.css";

type WorkCalendarProps = {};

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const days = [
    28, 29, 30, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 1,
];

const sampleEvents = [
    { day: 1, title: "Batch 처리", color: "orange" },
    { day: 7, title: "JSONL 오류 수정", color: "blue" },
    { day: 7, title: "데이터 수집", color: "green" },
    { day: 8, title: "Parser 리팩터링", color: "green" },
    { day: 15, title: "QA 정책 정리", color: "purple" },
    { day: 28, title: "Batch 에러 처리", color: "blue" },
    { day: 29, title: "리포트 작성", color: "cyan" },
];

export default function WorkCalendar({ }: WorkCalendarProps) {
    return (
        <main className={styles.workCalendar}>
            <header className={styles.header}>
                <div>
                    <p className={styles.label}>Calendar</p>
                    <h1>2026년 7월</h1>
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
                <div className={styles.weekGrid}>
                    {weekDays.map((day) => (
                        <div className={styles.weekDay} key={day}>
                            {day}
                        </div>
                    ))}
                </div>

                <div className={styles.dateGrid}>
                    {days.map((day, index) => {
                        const events = sampleEvents.filter((event) => event.day === day);
                        const isSelected = day === 7 && index === 16;

                        return (
                            <div
                                className={`${styles.dayCell} ${isSelected ? styles.selected : ""}`}
                                key={`${day}-${index}`}
                            >
                                <span className={styles.dayNumber}>{day}</span>

                                <div className={styles.eventList}>
                                    {events.map((event) => (
                                        <span
                                            className={`${styles.eventPill} ${styles[event.color]}`}
                                            key={`${day}-${event.title}`}
                                        >
                                            {event.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className={styles.detailArea}>
                <div className={styles.dayDetail}>
                    <h3>7월 7일 (화)</h3>
                    <p>3개의 일정</p>

                    <div className={styles.detailItem}>
                        <span>10:00</span>
                        <strong>JSONL 오류 수정</strong>
                    </div>
                    <div className={styles.detailItem}>
                        <span>15:00</span>
                        <strong>데이터 수집</strong>
                    </div>
                    <div className={styles.detailItem}>
                        <span>18:00</span>
                        <strong>회의</strong>
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
                            <dd>Calendar UI 구현 및 시안 반영</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </main>
    );
}
import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./WorkCalendar.module.css";

type WorkCalendarProps = {};

type CalendarView =
    | "dayGridMonth"
    | "timeGridWeek"
    | "timeGridDay"
    | "listMonth";

const calendarViews: {
    label: string;
    value: CalendarView;
}[] = [
        { label: "월", value: "dayGridMonth" },
        { label: "주", value: "timeGridWeek" },
        { label: "일", value: "timeGridDay" },
        { label: "목록", value: "listMonth" },
    ];

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
    const calendarRef = useRef<FullCalendar | null>(null);

    const [calendarTitle, setCalendarTitle] = useState("2026년 7월");
    const [currentView, setCurrentView] =
        useState<CalendarView>("dayGridMonth");

    const getCalendarApi = () => {
        return calendarRef.current?.getApi();
    };

    const handlePrevious = () => {
        getCalendarApi()?.prev();
    };

    const handleNext = () => {
        getCalendarApi()?.next();
    };

    const handleToday = () => {
        getCalendarApi()?.today();
    };

    const handleViewChange = (view: CalendarView) => {
        getCalendarApi()?.changeView(view);
        setCurrentView(view);
    };

    return (
        <main className={styles.workCalendar}>
            <header className={styles.header}>
                <div className={styles.titleGroup}>
                    <p className={styles.label}>Calendar</p>

                    <div className={styles.monthNav}>
                        <button
                            type="button"
                            className={styles.navButton}
                            onClick={handlePrevious}
                            aria-label="이전 기간"
                        >
                            ‹
                        </button>

                        <h1>{calendarTitle}</h1>

                        <button
                            type="button"
                            className={styles.navButton}
                            onClick={handleNext}
                            aria-label="다음 기간"
                        >
                            ›
                        </button>

                        <button
                            type="button"
                            className={styles.todayButton}
                            onClick={handleToday}
                        >
                            오늘
                        </button>
                    </div>
                </div>

                <div className={styles.actions}>
                    <div className={styles.viewTabs}>
                        {calendarViews.map((view) => (
                            <button
                                type="button"
                                key={view.value}
                                className={
                                    currentView === view.value ? styles.active : undefined
                                }
                                onClick={() => handleViewChange(view.value)}
                            >
                                {view.label}
                            </button>
                        ))}
                    </div>

                    <button type="button" className={styles.addButton}>
                        + 일정 추가
                    </button>
                </div>
            </header>

            <section className={styles.calendarCard}>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        listPlugin,
                        interactionPlugin,
                    ]}
                    initialView="dayGridMonth"
                    initialDate="2026-07-01"
                    locale="ko"
                    height="auto"
                    headerToolbar={false}
                    events={sampleEvents}
                    datesSet={(dateInfo) => {
                        setCalendarTitle(dateInfo.view.title);
                        setCurrentView(dateInfo.view.type as CalendarView);
                    }}
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
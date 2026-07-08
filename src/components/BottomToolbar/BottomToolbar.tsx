import {
    FaSearch,
    FaChartBar,
    FaTag,
    FaPaperclip,
    FaBell,
    FaMoon,
} from "react-icons/fa";
import styles from "./BottomToolbar.module.css";

const tools = [
    { icon: <FaSearch />, title: "검색 기능", desc: "제목, 내용, 프로젝트 검색" },
    { icon: <FaChartBar />, title: "통계/리포트", desc: "월별 업무 시간, 완료율" },
    { icon: <FaTag />, title: "태그 관리", desc: "태그 추가 및 관리" },
    { icon: <FaPaperclip />, title: "첨부파일", desc: "파일 첨부 및 관리" },
    { icon: <FaBell />, title: "알림 기능", desc: "마감일 알림, 일정 알림" },
    { icon: <FaMoon />, title: "다크 모드", desc: "테마 변경" },
];

export default function BottomToolbar() {
    return (
        <div className={styles.toolbar}>
            {tools.map((tool) => (
                <div className={styles.tool} key={tool.title}>
                    <div className={styles.icon}>{tool.icon}</div>
                    <div>
                        <strong>{tool.title}</strong>
                        <p>{tool.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
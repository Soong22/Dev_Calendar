import styles from "./Sidebar.module.css";

type SidebarProps = {};

export default function Sidebar({ }: SidebarProps) {
    return <aside className={styles.sidebar}>Sidebar</aside>;
}
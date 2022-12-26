import styles from "../styles/section.module.css";

export const MainSection = ({ children }) => {
    return <section className={styles.mainSection}>{children}</section>;
};

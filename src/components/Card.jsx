import styles from "../styles/card.module.css";

export const Card = ({ children }) => {
    return <article className={styles.card}>{children}</article>;
};

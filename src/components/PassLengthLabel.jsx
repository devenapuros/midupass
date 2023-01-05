import React from "react";
import styles from "../styles/passLengthLabel.module.css";

export const PassLengthLabel = ({ length }) => {
    return (
        <div className={styles.container}>
            <span className={styles.label}>Password length</span>
            <span className={styles.result}>{length}</span>
        </div>
    );
};

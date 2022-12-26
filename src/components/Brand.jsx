import React from "react";
import { KeyIcon } from "../icons/KeyIcon";
import styles from "../styles/brand.module.css";

export const Brand = () => {
    return (
        <header className={styles.header}>
            <div className={styles.iconContainer}>
                <KeyIcon />
            </div>
            <div className={styles.brandTitle}>
                <h1>
                    Midu<span className={styles.blueSpan}>Pass</span>
                </h1>
                <small>Password Generator</small>
            </div>
        </header>
    );
};

import styles from "../styles/toggleSwitch.module.css";

export const ToggleSwitch = ({ active, handleClick, disabled }) => {
    return (
        <button
            className={`${styles.toggleContainer} ${active && styles.active} ${
                disabled && styles.disabled
            }`}
            onClick={handleClick}
            disabled={disabled}
        >
            <span className={styles.toggleCircle}></span>
        </button>
    );
};

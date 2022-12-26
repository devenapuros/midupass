import { CopyIcon } from "../icons/CopyIcon";
import styles from "../styles/copyButton.module.css";

export const CopyButton = ({ handleClick, disabled }) => {
    return (
        <button
            className={`${styles.copyButton} ${disabled && styles.disabled}`}
            onClick={handleClick}
        >
            <CopyIcon />
        </button>
    );
};

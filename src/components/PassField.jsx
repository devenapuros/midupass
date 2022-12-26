/* eslint-disable react/prop-types */
import styles from "../styles/passField.module.css";
import { CopyButton } from "../components/CopyButton";
import { CopiedTip } from "../components/CopiedTip";
import { useState } from "react";

export const PassField = ({ value, setValue }) => {
    const [check, setCheck] = useState(false);

    const copyPass = () => {
        navigator.clipboard
            .writeText(value)
            .then(() => {
                setCheck(true);
                setTimeout(() => {
                    setCheck(false);
                }, 1300);
            })
            .catch(() => {
                alert("Cannot copy password to clipboard");
            });
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Generating password..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
                readOnly
            />
            <span className={styles.separator}></span>
            {!check && <CopyButton handleClick={copyPass} />}
            {check && <CopiedTip />}
        </div>
    );
};

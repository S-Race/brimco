import { useTheme } from "next-themes";
import styles from "../styles/LoginTilt.module.css"

const LoginTilt = () => {
    const { theme } = useTheme();

    return (
        <div className={styles.tilt}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                    className={ theme === "light" ? styles.shapeFill : styles.shapeFillDark }></path>
            </svg>
        </div>
    )
};

export default LoginTilt;
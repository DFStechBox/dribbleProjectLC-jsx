import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ className, children }) {
  return (
    <button className={`${className} ${styles.button}`}>{children}</button>
  );
}

export default Button;

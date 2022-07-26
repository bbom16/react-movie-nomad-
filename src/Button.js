import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, clickEvent }) {
  return <button className={styles.btn} onClick={clickEvent}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;

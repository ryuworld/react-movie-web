import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export const Button = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired, // isRequired은 필수로 해야한다는 뜻
};

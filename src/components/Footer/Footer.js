import React from "react";

import "./footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  let currentYear = new Date().getFullYear();
  return (
    <footer className="centered" style={{ color: nonThemeColor }}>
      ETIBORINGIZ UCHUN RAXMAT
    </footer>
  );
}
export default Footer;

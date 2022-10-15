import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Protal-Demo</h1>,
    document.getElementById("portal-demo")
  );
}

export default PortalDemo;

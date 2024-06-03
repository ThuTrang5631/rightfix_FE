import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/_index.scss";
import "./index.css";
import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

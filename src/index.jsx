import React from "react";
import ReactDOM from "react-dom/client";
import MailingSystem from "./main";
import AppProvider from "./Context/AppContext";

const Main = () => {
  return (
    <>
      <MailingSystem />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </AppProvider>
);

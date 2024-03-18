import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./context/context.jsx";

const createElement = document.getElementById("root");
const root = createRoot(createElement);

root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Slide
        bodyClassName="toastBody"
      />
    </React.StrictMode>
  </ContextProvider>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     < App/>
//   </React.StrictMode>,
// )

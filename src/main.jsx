import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Layout from "./Layout.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={myntraStore}>
    <Layout />
  </Provider>
);

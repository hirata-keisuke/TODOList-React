import { createRoot } from "react-dom/client";

import { App } from "./App";

const rootContent = document.getElementById("root");
const root = createRoot(rootContent);

root.render(<App />);

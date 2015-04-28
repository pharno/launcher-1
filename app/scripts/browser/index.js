import React from "react";
// have to use full path because relative require doesn't work when loaded
// through script tag
import App from "./scripts/browser/classes/App";

React.render(<App />, document.getElementById("app"));

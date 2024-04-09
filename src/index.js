import * as React from "react";

// Register the component extension in ArgoCD
((window) => {
  const component = () => {
    return React.createElement("div", {}, "Hello World");
  };
  window.extensionsAPI.registerResourceExtension(
    component,
    "*",
    "*",
    "Nice extension"
  );
})(window);
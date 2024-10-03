import { createElement } from "react";

export function preview({ textLabel }) {
    return <div className="snackbar-preview">{textLabel}</div>;
}

export function getPreviewCss() {
    return require("./ui/Snackbar.css");
}

import { createElement } from "react";

export function preview() {
    return <div className="snackbar-widget">Snackbar widget</div>;
}

export function getPreviewCss() {
    return require("./ui/Snackbar.css");
}

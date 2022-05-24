/* eslint-disable no-unused-expressions */
import "./ui/Snackbar.css";
import { createElement, useEffect, useRef } from "react";

export default function Snackbar({
    action,
    autoClose,
    buttonLabel,
    canBeClosed,
    leading,
    openSnackbar,
    textLabel,
    ...rest
}) {
    const id = rest.id || "";
    const style = rest.class || "";
    const widgetName = rest.name || "";
    const widget = useRef(null);
    const widgetContainer = useRef(null);
    let timer;

    function onclickAction() {
        action.execute();
    }

    function closeSnackbar() {
        clearTimer();
        widget.current && widget.current.classList.remove("snackbar-widget--available");
        widgetContainer.current && widgetContainer.current.classList.remove("snackbar-widget__container--open");
        openSnackbar.setValue(false);
    }

    function setTimer() {
        timer = setTimeout(() => closeSnackbar(), autoClose * 1000);
    }

    function clearTimer() {
        clearTimeout(timer);
    }

    useEffect(() => {
        if (widgetContainer.current && openSnackbar.status === "available") {
            if (openSnackbar.value === true) {
                widget.current.classList.add("snackbar-widget--available");
                widgetContainer.current.classList.add("snackbar-widget__container--open");
                setTimer();
            }

            if (openSnackbar.value === false) {
                widget.current.classList.remove("snackbar-widget--available");
                widgetContainer.current.classList.remove("snackbar-widget__container--open");
                clearTimer();
            }

            if (leading === true) {
                widget.current.classList.add("snackbar-widget--leading");
            }
        }
    });

    if (textLabel.status === "available") {
        return (
            <div id={id} className={`snackbar-widget ${style} ${widgetName}`} ref={widget}>
                <div className="snackbar-widget__container" ref={widgetContainer}>
                    <p className="snackbar-widget__label" aria-live="polite">
                        {textLabel.value}
                    </p>
                    <div className="snackbar-widget__actions">
                        {action && action.canExecute && (
                            <button className="snackbar-widget__action" onClick={onclickAction}>
                                {buttonLabel}
                            </button>
                        )}

                        {canBeClosed === true && (
                            <button className="snackbar-widget__close" title="Dismiss" onClick={closeSnackbar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                    <path
                                        d="M6,5,9.8,1.19a.71.71,0,0,0,0-1,.71.71,0,0,0-1,0L5,4,1.19.2a.71.71,0,0,0-1,0,.71.71,0,0,0,0,1L4,5,.2,8.81a.71.71,0,0,0,0,1,.74.74,0,0,0,.5.2.71.71,0,0,0,.49-.2L5,6,8.81,9.8a.71.71,0,0,0,.49.2.74.74,0,0,0,.5-.2.71.71,0,0,0,0-1Z"
                                        fill="#fff"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

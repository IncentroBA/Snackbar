
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import { useRef, useEffect, createElement } from 'react';

___$insertStyle(".snackbar-widget {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  margin: 8px;\n  position: fixed;\n  pointer-events: none;\n  right: 0;\n  z-index: 8;\n}\n\n.snackbar-widget--leading {\n  justify-content: flex-start;\n}\n\n.snackbar-widget--available {\n  pointer-events: all;\n}\n\n.snackbar-widget__container {\n  align-items: center;\n  background-color: #323232;\n  border-radius: 4px;\n  box-shadow: 0 3px 5px -1px rgb(0 0 0/20%), 0 6px 10px 0 rgb(0 0 0/14%), 0 1px 18px 0 rgb(0 0 0/12%);\n  color: #eeeeee;\n  display: flex;\n  flex-direction: row;\n  min-width: 344px;\n  max-width: 672px;\n  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, -webkit-transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;\n  transform: scale(0);\n  opacity: 0;\n}\n\n.snackbar-widget__container--open {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.snackbar-widget__label {\n  color: currentColor;\n  margin: 0;\n  padding: 14px 16px;\n}\n\n.snackbar-widget__actions {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  margin-right: 8px;\n}\n\n.snackbar-widget__action {\n  background-color: transparent;\n  border: 0;\n  color: var(--brand-primary, #c089ff);\n  font-weight: bold;\n  margin: 8px;\n  padding: 0 8px;\n}\n\n.snackbar-widget__close {\n  background-color: transparent;\n  border: 0;\n  height: 36px;\n  padding: 9px;\n  position: relative;\n  width: 36px;\n}\n\n.snackbar-widget__close::after {\n  background-color: hsla(0, 0%, 100%, 0.87);\n  content: \"\";\n  border-radius: 50%;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  transition: opacity 0.15s linear;\n  top: 0;\n  width: 100%;\n}\n\n.snackbar-widget__close:hover::after {\n  opacity: 0.08;\n}\n\n.snackbar-widget__close:focus::after {\n  opacity: 0.24;\n}");

/* eslint-disable no-unused-expressions */
function Snackbar({
  action,
  autoClose,
  buttonLabel,
  canBeClosed,
  leading,
  openSnackbar,
  textLabel
}) {
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
    return createElement("div", {
      className: "snackbar-widget",
      ref: widget
    }, createElement("div", {
      className: "snackbar-widget__container",
      ref: widgetContainer
    }, createElement("p", {
      className: "snackbar-widget__label",
      "aria-live": "polite"
    }, textLabel.value), createElement("div", {
      className: "snackbar-widget__actions"
    }, action && action.canExecute && createElement("button", {
      className: "snackbar-widget__action",
      onClick: onclickAction
    }, buttonLabel), canBeClosed === true && createElement("button", {
      className: "snackbar-widget__close",
      title: "Dismiss",
      onClick: closeSnackbar
    }, createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "10",
      height: "10",
      viewBox: "0 0 10 10"
    }, createElement("path", {
      d: "M6,5,9.8,1.19a.71.71,0,0,0,0-1,.71.71,0,0,0-1,0L5,4,1.19.2a.71.71,0,0,0-1,0,.71.71,0,0,0,0,1L4,5,.2,8.81a.71.71,0,0,0,0,1,.74.74,0,0,0,.5.2.71.71,0,0,0,.49-.2L5,6,8.81,9.8a.71.71,0,0,0,.49.2.74.74,0,0,0,.5-.2.71.71,0,0,0,0-1Z",
      fill: "#fff"
    }))))));
  } else {
    return null;
  }
}

export { Snackbar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hY2tiYXIubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvU25hY2tiYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IFwiLi91aS9TbmFja2Jhci5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNuYWNrYmFyKHsgYWN0aW9uLCBhdXRvQ2xvc2UsIGJ1dHRvbkxhYmVsLCBjYW5CZUNsb3NlZCwgbGVhZGluZywgb3BlblNuYWNrYmFyLCB0ZXh0TGFiZWwgfSkge1xuICAgIGNvbnN0IHdpZGdldCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB3aWRnZXRDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG4gICAgbGV0IHRpbWVyO1xuXG4gICAgZnVuY3Rpb24gb25jbGlja0FjdGlvbigpIHtcbiAgICAgICAgYWN0aW9uLmV4ZWN1dGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZVNuYWNrYmFyKCkge1xuICAgICAgICBjbGVhclRpbWVyKCk7XG4gICAgICAgIHdpZGdldC5jdXJyZW50ICYmIHdpZGdldC5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbmFja2Jhci13aWRnZXQtLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgd2lkZ2V0Q29udGFpbmVyLmN1cnJlbnQgJiYgd2lkZ2V0Q29udGFpbmVyLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNuYWNrYmFyLXdpZGdldF9fY29udGFpbmVyLS1vcGVuXCIpO1xuICAgICAgICBvcGVuU25hY2tiYXIuc2V0VmFsdWUoZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRpbWVyKCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gY2xvc2VTbmFja2JhcigpLCBhdXRvQ2xvc2UgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclRpbWVyKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh3aWRnZXRDb250YWluZXIuY3VycmVudCAmJiBvcGVuU25hY2tiYXIuc3RhdHVzID09PSBcImF2YWlsYWJsZVwiKSB7XG4gICAgICAgICAgICBpZiAob3BlblNuYWNrYmFyLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNuYWNrYmFyLXdpZGdldC0tYXZhaWxhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHdpZGdldENvbnRhaW5lci5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzbmFja2Jhci13aWRnZXRfX2NvbnRhaW5lci0tb3BlblwiKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3BlblNuYWNrYmFyLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHdpZGdldC5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbmFja2Jhci13aWRnZXQtLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgICAgICAgICB3aWRnZXRDb250YWluZXIuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic25hY2tiYXItd2lkZ2V0X19jb250YWluZXItLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGVhZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHdpZGdldC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzbmFja2Jhci13aWRnZXQtLWxlYWRpbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0ZXh0TGFiZWwuc3RhdHVzID09PSBcImF2YWlsYWJsZVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuYWNrYmFyLXdpZGdldFwiIHJlZj17d2lkZ2V0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNuYWNrYmFyLXdpZGdldF9fY29udGFpbmVyXCIgcmVmPXt3aWRnZXRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbmFja2Jhci13aWRnZXRfX2xhYmVsXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dExhYmVsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25hY2tiYXItd2lkZ2V0X19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uICYmIGFjdGlvbi5jYW5FeGVjdXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNuYWNrYmFyLXdpZGdldF9fYWN0aW9uXCIgb25DbGljaz17b25jbGlja0FjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXR0b25MYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5CZUNsb3NlZCA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzbmFja2Jhci13aWRnZXRfX2Nsb3NlXCIgdGl0bGU9XCJEaXNtaXNzXCIgb25DbGljaz17Y2xvc2VTbmFja2Jhcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk02LDUsOS44LDEuMTlhLjcxLjcxLDAsMCwwLDAtMSwuNzEuNzEsMCwwLDAtMSwwTDUsNCwxLjE5LjJhLjcxLjcxLDAsMCwwLTEsMCwuNzEuNzEsMCwwLDAsMCwxTDQsNSwuMiw4LjgxYS43MS43MSwwLDAsMCwwLDEsLjc0Ljc0LDAsMCwwLC41LjIuNzEuNzEsMCwwLDAsLjQ5LS4yTDUsNiw4LjgxLDkuOGEuNzEuNzEsMCwwLDAsLjQ5LjIuNzQuNzQsMCwwLDAsLjUtLjIuNzEuNzEsMCwwLDAsMC0xWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJTbmFja2JhciIsImFjdGlvbiIsImF1dG9DbG9zZSIsImJ1dHRvbkxhYmVsIiwiY2FuQmVDbG9zZWQiLCJsZWFkaW5nIiwib3BlblNuYWNrYmFyIiwidGV4dExhYmVsIiwid2lkZ2V0IiwidXNlUmVmIiwid2lkZ2V0Q29udGFpbmVyIiwidGltZXIiLCJvbmNsaWNrQWN0aW9uIiwiZXhlY3V0ZSIsImNsb3NlU25hY2tiYXIiLCJjbGVhclRpbWVyIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNldFZhbHVlIiwic2V0VGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic3RhdHVzIiwidmFsdWUiLCJhZGQiLCJjYW5FeGVjdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSWUsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLFNBQVY7QUFBcUJDLEVBQUFBLFdBQXJCO0FBQWtDQyxFQUFBQSxXQUFsQztBQUErQ0MsRUFBQUEsT0FBL0M7QUFBd0RDLEVBQUFBLFlBQXhEO0FBQXNFQyxFQUFBQTtBQUF0RSxDQUFsQixFQUFxRztBQUNoSCxRQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQyxJQUFELENBQXJCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHRCxNQUFNLENBQUMsSUFBRCxDQUE5QjtBQUNBLE1BQUlFLEtBQUo7O0FBRUEsV0FBU0MsYUFBVCxHQUF5QjtBQUNyQlgsSUFBQUEsTUFBTSxDQUFDWSxPQUFQO0FBQ0g7O0FBRUQsV0FBU0MsYUFBVCxHQUF5QjtBQUNyQkMsSUFBQUEsVUFBVTtBQUNWUCxJQUFBQSxNQUFNLENBQUNRLE9BQVAsSUFBa0JSLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxNQUF6QixDQUFnQyw0QkFBaEMsQ0FBbEI7QUFDQVIsSUFBQUEsZUFBZSxDQUFDTSxPQUFoQixJQUEyQk4sZUFBZSxDQUFDTSxPQUFoQixDQUF3QkMsU0FBeEIsQ0FBa0NDLE1BQWxDLENBQXlDLGtDQUF6QyxDQUEzQjtBQUNBWixJQUFBQSxZQUFZLENBQUNhLFFBQWIsQ0FBc0IsS0FBdEI7QUFDSDs7QUFFRCxXQUFTQyxRQUFULEdBQW9CO0FBQ2hCVCxJQUFBQSxLQUFLLEdBQUdVLFVBQVUsQ0FBQyxNQUFNUCxhQUFhLEVBQXBCLEVBQXdCWixTQUFTLEdBQUcsSUFBcEMsQ0FBbEI7QUFDSDs7QUFFRCxXQUFTYSxVQUFULEdBQXNCO0FBQ2xCTyxJQUFBQSxZQUFZLENBQUNYLEtBQUQsQ0FBWjtBQUNIOztBQUVEWSxFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUNaLFFBQUliLGVBQWUsQ0FBQ00sT0FBaEIsSUFBMkJWLFlBQVksQ0FBQ2tCLE1BQWIsS0FBd0IsV0FBdkQsRUFBb0U7QUFDaEUsVUFBSWxCLFlBQVksQ0FBQ21CLEtBQWIsS0FBdUIsSUFBM0IsRUFBaUM7QUFDN0JqQixRQUFBQSxNQUFNLENBQUNRLE9BQVAsQ0FBZUMsU0FBZixDQUF5QlMsR0FBekIsQ0FBNkIsNEJBQTdCO0FBQ0FoQixRQUFBQSxlQUFlLENBQUNNLE9BQWhCLENBQXdCQyxTQUF4QixDQUFrQ1MsR0FBbEMsQ0FBc0Msa0NBQXRDO0FBQ0FOLFFBQUFBLFFBQVE7QUFDWDs7QUFFRCxVQUFJZCxZQUFZLENBQUNtQixLQUFiLEtBQXVCLEtBQTNCLEVBQWtDO0FBQzlCakIsUUFBQUEsTUFBTSxDQUFDUSxPQUFQLENBQWVDLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLDRCQUFoQztBQUNBUixRQUFBQSxlQUFlLENBQUNNLE9BQWhCLENBQXdCQyxTQUF4QixDQUFrQ0MsTUFBbEMsQ0FBeUMsa0NBQXpDO0FBQ0FILFFBQUFBLFVBQVU7QUFDYjs7QUFFRCxVQUFJVixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDbEJHLFFBQUFBLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlQyxTQUFmLENBQXlCUyxHQUF6QixDQUE2QiwwQkFBN0I7QUFDSDtBQUNKO0FBQ0osR0FsQlEsQ0FBVDs7QUFvQkEsTUFBSW5CLFNBQVMsQ0FBQ2lCLE1BQVYsS0FBcUIsV0FBekIsRUFBc0M7QUFDbEMsV0FDSTtBQUFLLE1BQUEsU0FBUyxFQUFDLGlCQUFmO0FBQWlDLE1BQUEsR0FBRyxFQUFFaEI7QUFBdEMsT0FDSTtBQUFLLE1BQUEsU0FBUyxFQUFDLDRCQUFmO0FBQTRDLE1BQUEsR0FBRyxFQUFFRTtBQUFqRCxPQUNJO0FBQUcsTUFBQSxTQUFTLEVBQUMsd0JBQWI7QUFBc0MsbUJBQVU7QUFBaEQsT0FDS0gsU0FBUyxDQUFDa0IsS0FEZixDQURKLEVBSUk7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0t4QixNQUFNLElBQUlBLE1BQU0sQ0FBQzBCLFVBQWpCLElBQ0c7QUFBUSxNQUFBLFNBQVMsRUFBQyx5QkFBbEI7QUFBNEMsTUFBQSxPQUFPLEVBQUVmO0FBQXJELE9BQ0tULFdBREwsQ0FGUixFQU9LQyxXQUFXLEtBQUssSUFBaEIsSUFDRztBQUFRLE1BQUEsU0FBUyxFQUFDLHdCQUFsQjtBQUEyQyxNQUFBLEtBQUssRUFBQyxTQUFqRDtBQUEyRCxNQUFBLE9BQU8sRUFBRVU7QUFBcEUsT0FDSTtBQUFLLE1BQUEsS0FBSyxFQUFDLDRCQUFYO0FBQXdDLE1BQUEsS0FBSyxFQUFDLElBQTlDO0FBQW1ELE1BQUEsTUFBTSxFQUFDLElBQTFEO0FBQStELE1BQUEsT0FBTyxFQUFDO0FBQXZFLE9BQ0k7QUFDSSxNQUFBLENBQUMsRUFBQyxtT0FETjtBQUVJLE1BQUEsSUFBSSxFQUFDO0FBRlQsTUFESixDQURKLENBUlIsQ0FKSixDQURKLENBREo7QUEyQkgsR0E1QkQsTUE0Qk87QUFDSCxXQUFPLElBQVA7QUFDSDtBQUNKOzs7OyJ9

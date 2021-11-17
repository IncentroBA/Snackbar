define(['react'], (function (react) { 'use strict';

    

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

    ___$insertStyle(".snackbar-widget {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  margin: 8px;\n  position: fixed;\n  pointer-events: none;\n  right: 0;\n  z-index: 8;\n}\n\n.snackbar-widget--leading {\n  justify-content: flex-start;\n}\n\n.snackbar-widget--available {\n  pointer-events: all;\n}\n\n.snackbar-widget__container {\n  align-items: center;\n  background-color: #323232;\n  border-radius: 4px;\n  box-shadow: 0 3px 5px -1px rgb(0 0 0/20%), 0 6px 10px 0 rgb(0 0 0/14%), 0 1px 18px 0 rgb(0 0 0/12%);\n  color: #eeeeee;\n  display: flex;\n  flex-direction: row;\n  max-width: 672px;\n  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, -webkit-transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;\n  transform: scale(0);\n  opacity: 0;\n}\n\n.snackbar-widget__container--open {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.snackbar-widget__label {\n  color: currentColor;\n  margin: 0;\n  padding: 14px 16px;\n}\n\n.snackbar-widget__actions {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  margin-right: 8px;\n}\n\n.snackbar-widget__action {\n  background-color: transparent;\n  border: 0;\n  color: var(--brand-primary, #c089ff);\n  font-weight: bold;\n  margin: 8px;\n  padding: 0 8px;\n}\n\n.snackbar-widget__close {\n  background-color: transparent;\n  border: 0;\n  height: 36px;\n  padding: 9px;\n  position: relative;\n  width: 36px;\n}\n\n.snackbar-widget__close::after {\n  background-color: hsla(0, 0%, 100%, 0.87);\n  content: \"\";\n  border-radius: 50%;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  transition: opacity 0.15s linear;\n  top: 0;\n  width: 100%;\n}\n\n.snackbar-widget__close:hover::after {\n  opacity: 0.08;\n}\n\n.snackbar-widget__close:focus::after {\n  opacity: 0.24;\n}");

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
      const widget = react.useRef(null);
      const widgetContainer = react.useRef(null);
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

      react.useEffect(() => {
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
        return react.createElement("div", {
          className: "snackbar-widget",
          ref: widget
        }, react.createElement("div", {
          className: "snackbar-widget__container",
          ref: widgetContainer
        }, react.createElement("p", {
          className: "snackbar-widget__label",
          "aria-live": "polite"
        }, textLabel.value), react.createElement("div", {
          className: "snackbar-widget__actions"
        }, action && action.canExecute && react.createElement("button", {
          className: "snackbar-widget__action",
          onClick: onclickAction
        }, buttonLabel), canBeClosed === true && react.createElement("button", {
          className: "snackbar-widget__close",
          title: "Dismiss",
          onClick: closeSnackbar
        }, react.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, react.createElement("path", {
          d: "M6,5,9.8,1.19a.71.71,0,0,0,0-1,.71.71,0,0,0-1,0L5,4,1.19.2a.71.71,0,0,0-1,0,.71.71,0,0,0,0,1L4,5,.2,8.81a.71.71,0,0,0,0,1,.74.74,0,0,0,.5.2.71.71,0,0,0,.49-.2L5,6,8.81,9.8a.71.71,0,0,0,.49.2.74.74,0,0,0,.5-.2.71.71,0,0,0,0-1Z",
          fill: "#fff"
        }))))));
      } else {
        return null;
      }
    }

    return Snackbar;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hY2tiYXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9TbmFja2Jhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5pbXBvcnQgXCIuL3VpL1NuYWNrYmFyLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU25hY2tiYXIoeyBhY3Rpb24sIGF1dG9DbG9zZSwgYnV0dG9uTGFiZWwsIGNhbkJlQ2xvc2VkLCBsZWFkaW5nLCBvcGVuU25hY2tiYXIsIHRleHRMYWJlbCB9KSB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHdpZGdldENvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgICBsZXQgdGltZXI7XG5cbiAgICBmdW5jdGlvbiBvbmNsaWNrQWN0aW9uKCkge1xuICAgICAgICBhY3Rpb24uZXhlY3V0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlU25hY2tiYXIoKSB7XG4gICAgICAgIGNsZWFyVGltZXIoKTtcbiAgICAgICAgd2lkZ2V0LmN1cnJlbnQgJiYgd2lkZ2V0LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNuYWNrYmFyLXdpZGdldC0tYXZhaWxhYmxlXCIpO1xuICAgICAgICB3aWRnZXRDb250YWluZXIuY3VycmVudCAmJiB3aWRnZXRDb250YWluZXIuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic25hY2tiYXItd2lkZ2V0X19jb250YWluZXItLW9wZW5cIik7XG4gICAgICAgIG9wZW5TbmFja2Jhci5zZXRWYWx1ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VGltZXIoKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBjbG9zZVNuYWNrYmFyKCksIGF1dG9DbG9zZSAqIDEwMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyVGltZXIoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpZGdldENvbnRhaW5lci5jdXJyZW50ICYmIG9wZW5TbmFja2Jhci5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgICAgIGlmIChvcGVuU25hY2tiYXIudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic25hY2tiYXItd2lkZ2V0LS1hdmFpbGFibGVcIik7XG4gICAgICAgICAgICAgICAgd2lkZ2V0Q29udGFpbmVyLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNuYWNrYmFyLXdpZGdldF9fY29udGFpbmVyLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVuU25hY2tiYXIudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcInNuYWNrYmFyLXdpZGdldC0tYXZhaWxhYmxlXCIpO1xuICAgICAgICAgICAgICAgIHdpZGdldENvbnRhaW5lci5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbmFja2Jhci13aWRnZXRfX2NvbnRhaW5lci0tb3BlblwiKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsZWFkaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcInNuYWNrYmFyLXdpZGdldC0tbGVhZGluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRleHRMYWJlbC5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25hY2tiYXItd2lkZ2V0XCIgcmVmPXt3aWRnZXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic25hY2tiYXItd2lkZ2V0X19jb250YWluZXJcIiByZWY9e3dpZGdldENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNuYWNrYmFyLXdpZGdldF9fbGFiZWxcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0TGFiZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbmFja2Jhci13aWRnZXRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24gJiYgYWN0aW9uLmNhbkV4ZWN1dGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic25hY2tiYXItd2lkZ2V0X19hY3Rpb25cIiBvbkNsaWNrPXtvbmNsaWNrQWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbkxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge2NhbkJlQ2xvc2VkID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNuYWNrYmFyLXdpZGdldF9fY2xvc2VcIiB0aXRsZT1cIkRpc21pc3NcIiBvbkNsaWNrPXtjbG9zZVNuYWNrYmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCAxMCAxMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTYsNSw5LjgsMS4xOWEuNzEuNzEsMCwwLDAsMC0xLC43MS43MSwwLDAsMC0xLDBMNSw0LDEuMTkuMmEuNzEuNzEsMCwwLDAtMSwwLC43MS43MSwwLDAsMCwwLDFMNCw1LC4yLDguODFhLjcxLjcxLDAsMCwwLDAsMSwuNzQuNzQsMCwwLDAsLjUuMi43MS43MSwwLDAsMCwuNDktLjJMNSw2LDguODEsOS44YS43MS43MSwwLDAsMCwuNDkuMi43NC43NCwwLDAsMCwuNS0uMi43MS43MSwwLDAsMCwwLTFaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlNuYWNrYmFyIiwiYWN0aW9uIiwiYXV0b0Nsb3NlIiwiYnV0dG9uTGFiZWwiLCJjYW5CZUNsb3NlZCIsImxlYWRpbmciLCJvcGVuU25hY2tiYXIiLCJ0ZXh0TGFiZWwiLCJ3aWRnZXQiLCJ1c2VSZWYiLCJ3aWRnZXRDb250YWluZXIiLCJ0aW1lciIsIm9uY2xpY2tBY3Rpb24iLCJleGVjdXRlIiwiY2xvc2VTbmFja2JhciIsImNsZWFyVGltZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VmFsdWUiLCJzZXRUaW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzdGF0dXMiLCJ2YWx1ZSIsImFkZCIsImNyZWF0ZUVsZW1lbnQiLCJjYW5FeGVjdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFBO0lBSWUsU0FBU0EsUUFBVCxDQUFrQjtJQUFFQyxFQUFBQSxNQUFGO0lBQVVDLEVBQUFBLFNBQVY7SUFBcUJDLEVBQUFBLFdBQXJCO0lBQWtDQyxFQUFBQSxXQUFsQztJQUErQ0MsRUFBQUEsT0FBL0M7SUFBd0RDLEVBQUFBLFlBQXhEO0lBQXNFQyxFQUFBQTtJQUF0RSxDQUFsQixFQUFxRztJQUNoSCxRQUFNQyxNQUFNLEdBQUdDLFlBQU0sQ0FBQyxJQUFELENBQXJCO0lBQ0EsUUFBTUMsZUFBZSxHQUFHRCxZQUFNLENBQUMsSUFBRCxDQUE5QjtJQUNBLE1BQUlFLEtBQUo7O0lBRUEsV0FBU0MsYUFBVCxHQUF5QjtJQUNyQlgsSUFBQUEsTUFBTSxDQUFDWSxPQUFQO0lBQ0g7O0lBRUQsV0FBU0MsYUFBVCxHQUF5QjtJQUNyQkMsSUFBQUEsVUFBVTtJQUNWUCxJQUFBQSxNQUFNLENBQUNRLE9BQVAsSUFBa0JSLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlQyxTQUFmLENBQXlCQyxNQUF6QixDQUFnQyw0QkFBaEMsQ0FBbEI7SUFDQVIsSUFBQUEsZUFBZSxDQUFDTSxPQUFoQixJQUEyQk4sZUFBZSxDQUFDTSxPQUFoQixDQUF3QkMsU0FBeEIsQ0FBa0NDLE1BQWxDLENBQXlDLGtDQUF6QyxDQUEzQjtJQUNBWixJQUFBQSxZQUFZLENBQUNhLFFBQWIsQ0FBc0IsS0FBdEI7SUFDSDs7SUFFRCxXQUFTQyxRQUFULEdBQW9CO0lBQ2hCVCxJQUFBQSxLQUFLLEdBQUdVLFVBQVUsQ0FBQyxNQUFN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

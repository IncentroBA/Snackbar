'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var require$$0 = ".snackbar-widget {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  margin: 8px;\n  position: fixed;\n  pointer-events: none;\n  right: 0;\n  z-index: 8;\n}\n\n.snackbar-widget--leading {\n  justify-content: flex-start;\n}\n\n.snackbar-widget--available {\n  pointer-events: all;\n}\n\n.snackbar-widget__container {\n  align-items: center;\n  background-color: #323232;\n  border-radius: 4px;\n  box-shadow: 0 3px 5px -1px rgb(0 0 0/20%), 0 6px 10px 0 rgb(0 0 0/14%), 0 1px 18px 0 rgb(0 0 0/12%);\n  color: #eeeeee;\n  display: flex;\n  flex-direction: row;\n  min-width: 344px;\n  max-width: 672px;\n  transition: opacity 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms, -webkit-transform 0.15s cubic-bezier(0, 0, 0.2, 1) 0ms;\n  transform: scale(0);\n  opacity: 0;\n}\n\n.snackbar-widget__container--open {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.snackbar-widget__label {\n  color: currentColor;\n  margin: 0;\n  padding: 14px 16px;\n}\n\n.snackbar-widget__actions {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  margin-right: 8px;\n}\n\n.snackbar-widget__action {\n  background-color: transparent;\n  border: 0;\n  color: var(--brand-primary, #c089ff);\n  font-weight: bold;\n  margin: 8px;\n  padding: 0 8px;\n}\n\n.snackbar-widget__close {\n  background-color: transparent;\n  border: 0;\n  height: 36px;\n  padding: 9px;\n  position: relative;\n  width: 36px;\n}\n\n.snackbar-widget__close::after {\n  background-color: hsla(0, 0%, 100%, 0.87);\n  content: \"\";\n  border-radius: 50%;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  transition: opacity 0.15s linear;\n  top: 0;\n  width: 100%;\n}\n\n.snackbar-widget__close:hover::after {\n  opacity: 0.08;\n}\n\n.snackbar-widget__close:focus::after {\n  opacity: 0.24;\n}";

function preview() {
  return react.createElement("div", {
    className: "snackbar-widget"
  }, "Snackbar widget");
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hY2tiYXIuZWRpdG9yUHJldmlldy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1NuYWNrYmFyLmVkaXRvclByZXZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZpZXcoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic25hY2tiYXItd2lkZ2V0XCI+U25hY2tiYXIgd2lkZ2V0PC9kaXY+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvU25hY2tiYXIuY3NzXCIpO1xufVxuIl0sIm5hbWVzIjpbInByZXZpZXciLCJjcmVhdGVFbGVtZW50IiwiZ2V0UHJldmlld0NzcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRU8sU0FBU0EsT0FBVCxHQUFtQjtBQUN0QixTQUFPQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsdUJBQVA7QUFDSDtBQUVNLFNBQVNDLGFBQVQsR0FBeUI7QUFDNUIsU0FBT0MsVUFBUDtBQUNIOzs7OzsifQ==

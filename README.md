## Snackbar

UI pattern from Material design. Snackbars provide brief messages about app processes at the bottom of the screen.

## Features

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the
bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear. Only
one snackbar should be displayed at a time.

## Usage

-   Place the widget inside a container / context where it's message and optional action are relevant to the user.
    -   The snackbar is positioned fixed on top of other content. This position can be relative to the parent container
        of the widget. This is a container with the css property `position: relative;` applied to it.
-   Give the widget a label text.
-   Set a boolean which tells the widget to pop up (the widget needs to be able to set this value back to false after
    closing).
-   Adjust the autoclose value if desired (`5 seconds` by default).

### Actions tab

-   (optional) Configure an action to be triggered from the snackbar (nanoflows, save changes, open pages, ...).
-   If an action is configured, also provide a button label.
-   May be closed? Give the user the option to manually close the snackbar, aside from the auto-close timer.
-   Conditional show button boolean (optional): Set this if the button should be hidden/visible via boolean attribute.

### Advanced

-   Leading: Positions the snackbar on the leading edge of the screen (left in LTR, right in RTL). The snackbar is
    centered by default.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

# LMS's monorepo

## Release Notes

### LMS version 1.0

*New Features*
- Comment toggling has been added.
- Alpha version of filtering has beed implemented.

*Bug Fixes*
- Tagging is persistent on lettersminglesouls.lmc.gatech.edu.

*Known Bugs*
- Stylistic bugs
  - About page does not "hug" the right side of the screen.
  - Mobile view is not rendered nicely. 
  - Sorting dropdown that is selected is blue rather than maroon.
  
## Install Guide

### Generic Install Information

*Pre-requisites*

blah

*Dependent Libraries*

blah

*Download Instructions*

No download for the client is needed. Simply access that project at lettersminglesouls.lmc.gatech.edu.

*Build Instructions*

- Unix
  - While in the /frontEnd directory, run the following command: `npm run buildUnix`.
- Windows
  - While in the /frontEnd directory, run the following command: `npm run buildWindows`.

*Installation of Application*

No installation for the client is needed. Simply access that project at lettersminglesouls.lmc.gatech.edu.

*Run Instructions*

- Frontend Testing
  - Ensure that TestDocumentService is in use in App.tsx.
  - While in the /frontEnd directory, run the following command: `npm run start`.
- Fullstack
  - Ensure that LocalDocumentService is in use in App.tsx.
  - Ensure that you've built the latest version of the application in the /frontend directory.
  - While in the /backend directory, run the following command: `python3 app.py`.

*Troubleshooting*

blah

### Server Information

*Starting Server*

For the server at lettersminglesouls.lmc.gatech.edu, simply rebooting the server via "sudo reboot" while ssh's in will get things back into normal working order. The script "lms_startup" in /etc/init.d has the list of commands being run during this process.

*Starting from Scratch*


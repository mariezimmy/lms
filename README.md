# LMS's monorepo

## Release Notes

### LMS version 1.0

*New Features*
- Comment toggling has been added.

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

Reference the /backEnd README.md for all backend setup information.
If developing backend functionality, ensure you're in the *lms* Conda environment. 

*Dependencies*

- npm and node
  - Download here: https://www.npmjs.com/get-npm
- Python 3
  - Download here: https://www.python.org/downloads/
- Conda
  - Install guide here: https://docs.conda.io/projects/conda/en/latest/user-guide/install/

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

If issues arise, ensure you're in the correct Conda environment (lms). Other common issues that may arise are attributed to missing dependencies on either your machine or the Conda environment. Install appropriate dependencies as needed. 

### Server Information

*Starting Server*

For the server at lettersminglesouls.lmc.gatech.edu, simply rebooting the server via "sudo reboot" while ssh's in will get things back into normal working order. The script "lms_startup.sh" in /etc/init.d has the list of commands being run during this process. Alternatively, you can just run the lms_startup script once ssh'd in.

*Starting from Scratch*

Clone this repo into a directory of your choice (we used /var/). Follow general build and run instructions above. You may have to perform general server administration tasks like setting up startup scripts or reverse proxies - this will vary based on your server environment. 

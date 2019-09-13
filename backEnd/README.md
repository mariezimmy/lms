## Conda

Activate the environment after you create the environment: `conda activate lms`
Create an environment from the .yaml `conda env create --file environment.yaml`
Install new dependencies: `conda env update --file environment.yaml`
Add a new dependency: `conda install packageName`
You've gotta update the environment.yaml by hand though.

Note for windows users: Conda will not work with powershell :(

## Serving with Flask

In the /frontEnd directory, run `npm run build`
After this command, you should notice that the static and templates folders are populated.
Now, in the /backEnd directory, run `gunicorn -c gunicornConfig.py wsgi`
The application should be available at the IP and port specified in the gunicornConfig.py.

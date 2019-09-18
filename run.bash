#!/bin/bash
cd frontEnd
npm run build
cp build ../backEnd/static/
cd ../backEnd
python app.py

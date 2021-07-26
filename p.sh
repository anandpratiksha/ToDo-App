#! /bin/sh

git pull https://github.com/anandpratiksha/ToDo-App.git
git status 
git add . 
git status 
git remote add origin https://github.com/anandpratiksha/ToDo-App.git
git commit -m "updates"
git push -u origin master 
#!/bin/bash

MESSAGE=$1

yarn prepublish
git add -A
git commit -m "$MESSAGE"
git push
git checkout master
git merge development
git push github master
git checkout development

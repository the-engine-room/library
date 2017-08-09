#!/bin/bash

if [ $TRAVIS_BRANCH == 'gh-pages' ] ; then
	echo "Deploying to remote"
	cd _site
  git status
  git branch
  git push -f deploy HEAD:gh-pages
else
	echo "Not deploying, since this branch isn't gh-pages."
fi

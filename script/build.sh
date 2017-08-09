#!/bin/bash

# Functions
function init {
	echo "Initializing git"
	mkdir _site
	cd _site
	git init
	git remote add deploy "webmaster@engnroom.org@ftp.greenhost.nl:/domains/theengineroom.org/travis_test_bare/"
	git config user.name "Travis CI"
	git config user.email "mayarichman@gmail.com"
	echo "Fetching from remote"
	git fetch deploy
	git checkout -b gh-pages
	cd ..
}

function build {
	echo "Building..."
  bundle exec jekyll build
	#grunt build --verbose # Build with Grunt; see Gruntfile.js for more details.
	echo "Committing the build"
	cd _site
	ls .
	git add -A
	git commit -m "Build #$TRAVIS_BUILD_NUMBER"
	cd ..
}

init
build

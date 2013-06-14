#!/bin/bash
git clone https://code.google.com/p/closure-library/ lib/closure-library

mkdir lib/externs -p
pushd lib/externs
wget http://closure-compiler.googlecode.com/git/contrib/externs/jasmine.js
wget http://closure-compiler.googlecode.com/git/contrib/externs/underscore-1.3.1.js
wget http://closure-compiler.googlecode.com/git/contrib/externs/jquery-1.9.js
popd
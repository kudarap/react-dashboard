#!/bin/bash

ENV=$1
BUILD="build"

out() {
  echo "[deploy] $1"
}

upload() {
  if [ $ENV == 'live' ]; then
    out "uploading on firebase hosting"
    firebase deploy
    return
  fi

  # development server
  out "uploading on dev server"
  npm run build
  scp -r build root@162.243.138.32:~/ratatxt/c_new
  ssh root@162.243.138.32 \
    "cd ~/ratatxt &&\
    mv console tmp &&\
    mv c_new console &&\
    rm -r tmp"
}

main() {
  if [[ -z $ENV ]]; then
    ENV='dev'
  fi

  if [ $ENV != 'dev' ] && [ $ENV != 'live' ]; then
    out "invalid '$ENV' ENV!"
    out "stopped!"
    exit
  fi

  out "deploying on $ENV..."
  out "building..."
  # npm run build
  out "uploading..."
  upload

  out "done!"
}

main
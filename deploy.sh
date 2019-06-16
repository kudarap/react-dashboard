#!/bin/bash

env=$1
build_path='build'
url=root@chiligarlic.com
deploy_path='/root/dev/dashboard'

out() {
  echo "[deploy] $1"
}

upload() {
  if [ $env == 'prod' ]; then
    out "uploading on production server"
    out "NOT IMPLEMENTED!"
    return
  fi

  # development server
  out "uploading on dev server"
  scp -r $build_path $url:$deploy_path.tmp
  # shellcheck disable=SC2029
  ssh $url "rm -rf ${deploy_path} && mv ${deploy_path}.tmp ${deploy_path}"
}

main() {
  if [[ -z $env ]]; then
    env='dev'
  fi

  if [ $env != 'dev' ] && [ $env != 'prod' ]; then
    out "invalid '$env' env!"
    out "stopped!"
    exit
  fi

  out "deploying on $env..."
  out "building..."; ./build.sh .env.$env
  out "uploading..."; upload

  out "done!"
}

main
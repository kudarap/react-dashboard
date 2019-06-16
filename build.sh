#!/bin/bash

envf=$1

out() {
  echo "[build] $1"
}

main() {
  # check env file exist
  out "USAGE:   ./build.sh ENVFILE"

  out "building with $envf ..."
  sh -ac ". ./$envf; react-scripts build"

  out "done!"
}

main
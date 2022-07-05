#!/bin/bash
REPOSITORY=/home/ubuntu/build

pwd
npm -version
pm2 -version

cd $REPOSITORY
cd dist
yarn
cd $REPOSITORY
pm2 start dist
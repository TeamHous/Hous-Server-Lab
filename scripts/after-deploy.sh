#!/bin/bash
REPOSITORY=/home/ubuntu/build

cd $REPOSITORY
cd dist
yarn
cd $REPOSITORY
pm2 start dist
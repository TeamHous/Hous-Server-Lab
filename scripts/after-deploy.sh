#!/bin/bash
REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

npm install

npm install -g pm2

pm2 start dist

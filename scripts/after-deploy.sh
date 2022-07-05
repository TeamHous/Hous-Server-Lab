#!/bin/bash
REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

yarn

pwd

pm2 start dist

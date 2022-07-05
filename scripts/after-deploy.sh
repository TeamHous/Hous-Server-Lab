#!/bin/bash
REPOSITORY=/home/ubuntu/build

pwd

cd $REPOSITORY

pwd

ls

sudo /usr/bin/yarn

sudo /usr/bin/pm2 start dist

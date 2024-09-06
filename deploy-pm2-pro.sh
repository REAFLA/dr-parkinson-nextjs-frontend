#!/bin/bash

git pull

bun i

bun next build

pm2 delete dr-parkinson

pm2 start pm2.json

sudo service nginx restart

pm2 save
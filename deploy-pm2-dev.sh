#!/bin/bash

git pull

bun i

pm2 delete dr-parkinson

bun dev
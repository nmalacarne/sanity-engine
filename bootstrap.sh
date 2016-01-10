#!/usr/bin/env bash

sudo apt-get update -q
sudo apt-get install -qy curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
source ~/.nvm/nvm.sh
cd /vagrant
nvm install
nvm alias default node
npm install

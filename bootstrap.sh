#!/usr/bin/env bash

sudo apt-get update
sudo apt-get install -y curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
source ~/.nvm/nvm.sh
cd /vagrant
nvm install
npm install

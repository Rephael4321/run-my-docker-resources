#!/bin/bash

set -e

echo "Updating package database..."
sudo apt-get update

echo "Upgrading packages..."
sudo apt-get upgrade

echo "Installing required packages..."
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

echo "Adding Docker’s official GPG key..."
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo "Setting up the Docker repository..."
echo \
  "deb [arch=$(dpkg --print-architecture) \
  signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

echo "Updating package database (with Docker repo)..."
sudo apt-get update

echo "Installing Docker Engine, CLI and containerd..."
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "Enabling and starting Docker..."
sudo systemctl enable docker
sudo systemctl start docker

echo "Adding current user to docker group (you may need to log out and log back in)..."
sudo usermod -aG docker $USER

echo "Docker and Docker Compose installed successfully!"
echo "Docker version: $(docker --version)"
echo "Docker Compose version: $(docker compose version)"

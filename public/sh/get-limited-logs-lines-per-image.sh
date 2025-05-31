#!/bin/bash

# Usage: ./get-limited-logs-lines-per-image.sh <image_name>
# or     LINES_TO_SHOW=50 ./get-limited-logs-lines-per-image.sh <image_name>

IMAGE_NAME="$1"
LINES_TO_SHOW="${LINES_TO_SHOW:-100}"

if [ -z "$IMAGE_NAME" ]; then
  echo "Usage: $0 <image_name>"
  exit 1
fi

# Find first container matching the image
CONTAINER_NAME=$(docker ps --filter "ancestor=$IMAGE_NAME" --format '{{.Names}}' | head -n 1)

if [ -z "$CONTAINER_NAME" ]; then
  echo "Error: No running container found for image '$IMAGE_NAME'."
  exit 2
fi

# Verify container exists and is running
if ! docker container inspect "$CONTAINER_NAME" > /dev/null 2>&1; then
  echo "Error: Container '$CONTAINER_NAME' does not exist."
  exit 3
fi

if ! docker ps --format '{{.Names}}' | grep -wq "$CONTAINER_NAME"; then
  echo "Error: Container '$CONTAINER_NAME' is not running."
  exit 4
fi

# Show logs
echo "Found container: $CONTAINER_NAME (from image '$IMAGE_NAME')"
echo "Showing last $LINES_TO_SHOW lines of logs..."
docker logs --tail "$LINES_TO_SHOW" "$CONTAINER_NAME"

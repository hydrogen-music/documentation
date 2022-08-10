#!/bin/sh

for l in en fr de ca es it nl ; do
  echo "=== Screenshots for $l ==="
  env LANGUAGE="$l" LANG="$l" ./get_images.sh "$1"
  mkdir "../img/generated_$l"
  for p in *.png; do
    mv "$p" "../img/generated_$l"
  done
done


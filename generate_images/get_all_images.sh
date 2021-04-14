#!/bin/sh

for l in en fr de ca es it nl ; do
  echo "=== Screenshots for $l ==="
  env LANG="$l" ./get_images.sh "$1"
  mkdir "generated_$l"
  for p in *.png; do
    mv "$p" "generated_$l"
  done
done


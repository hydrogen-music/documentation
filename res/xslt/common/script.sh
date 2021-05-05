#!/bin/bash

for ii in *.xml; do
	sed -i 's/ / /g' $ii
done


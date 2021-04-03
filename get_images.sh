#!/bin/sh

conf=$HOME/.hydrogen/hydrogen.conf

out() {
    sed 's/^/  > /'
}

if [ -z $1 ]; then
    echo "Usage: $0 <hydrogen binary>"
    exit 2
fi
H2="$1"

# Use a High-DPI scaling for docs
QT_SCALE_FACTOR=2
export QT_SCALE_FACTOR

echo "Generating tabbed layout images"
"$H2" -n --layout tabbed -t shotlist-tabbed.txt 2>&1 | out

echo "Generating single pane layout images"
"$H2" -n --layout single -t shotlist.txt 2>&1 | out

# Generate images from SVG
echo "Generating compound images with inkscape"
(
    inkscape --export-png GUI_Sections.png --export-dpi 192 GUI_Single_Pane.svg 
    inkscape --export-png GUI_Tabbed_Annotated.png --export-dpi 192 GUI_Tabbed.svg
) 2>&1 | out



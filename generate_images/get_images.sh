#!/bin/sh

out() {
    sed 's/^/  > /'
}

if [ -z $1 ]; then
    echo "Usage: $0 <hydrogen binary>"
    exit 2
fi
H2="$1"

DEMO=GM_kit_Diddley_example.h2song

# Use a High-DPI scaling for docs
QT_SCALE_FACTOR=2
export QT_SCALE_FACTOR

echo "Generating tabbed layout images"
"$H2" -n --layout tabbed -t shotlist-tabbed.txt "$DEMO" 2>&1 | out

echo "Generating single pane layout images"
"$H2" -n --layout single -t shotlist.txt "$DEMO" 2>&1 | out

# Specific song stuff
echo "Generating misc images"
"$H2" -n --layout single -t shotlist-misc.txt ./Misc.h2song 2>&1 | out

# Example song stuff
echo "Generating example images"
"$H2" -n --layout single -t shotlist-example.txt ./Example.h2song 2>&1 | out

# Generate images from SVG
echo "Generating compound images with inkscape"
(
    inkscape --export-png GUI_Sections_0.9.5_v2.png --export-dpi 192 GUI_Single_Pane.svg 
    inkscape --export-png MainUI_tabbed.png --export-dpi 192 GUI_Tabbed.svg
    inkscape --export-png Virtual_patterns_menu.png --export-dpi 192 PatternListMenu.svg
) 2>&1 | out



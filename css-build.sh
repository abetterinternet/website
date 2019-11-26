#!/bin/bash

# This script uses node-sass and gulp
# npm install -g node-sass gulp gulp-cli

# Store the theme package filename
theme_filename='purpose-website-ui-kit-v2.0.1'

# Save current directory
site_dir=$(pwd)

# Clean up the tmp directory where we'll work
rm -Rf /tmp/${theme_filename}
rm -Rf /tmp/__MACOSX

# Unzip purpose theme to tmp directory
unzip ~/Downloads/${theme_filename}.zip -d /tmp/

# Copy custom CSS to build directory
rm /tmp/${theme_filename}/resources/scss/custom/_styles.scss
rm /tmp/${theme_filename}/resources/scss/custom/_variables.scss
cp ./src/purpose-user-css/_styles.scss    /tmp/${theme_filename}/resources/scss/custom/
cp ./src/purpose-user-css/_variables.scss /tmp/${theme_filename}/resources/scss/custom/

# Build theme files
cd /tmp/${theme_filename}/
npm install
gulp build

# Remove the old css
rm ${site_dir}/static/purpose-theme/css/theme.css
rm ${site_dir}/static/purpose-theme/css/theme.min.css

# Copy over build results
cp ./assets/css/purpose.css     ${site_dir}/static/purpose-theme/css/theme.css
cp ./assets/css/purpose.min.css ${site_dir}/static/purpose-theme/css/theme.min.css

# Clean up
rm -Rf /tmp/${theme_filename}

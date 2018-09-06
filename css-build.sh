#!/bin/bash

# This script uses node-sass and gulp
# npm install -g node-sass gulp gulp-cli

# Store the theme package filename
theme_filename='purpose-website-ui-kit-v1.1.1'

# Save current directory
site_dir=$(pwd)

# Clean up the tmp directory where we'll work
rm -Rf /tmp/${theme_filename}

# Unzip purpose theme to tmp directory
unzip ./src/${theme_filename}.zip -d /tmp/

# Copy custom CSS to build directory
rm /tmp/${theme_filename}/assets/scss/user/_styles.scss
rm /tmp/${theme_filename}/assets/scss/user/_variables.scss
cp ./src/purpose-user-css/_styles.scss    /tmp/${theme_filename}/assets/scss/user/
cp ./src/purpose-user-css/_variables.scss /tmp/${theme_filename}/assets/scss/user/

# Build theme files
cd /tmp/${theme_filename}/
npm install
gulp build

# Remove the old css
rm ${site_dir}/static/purpose-theme/css/theme.css
rm ${site_dir}/static/purpose-theme/css/theme.min.css

# Copy over build results
cp ./dist/css/theme.css     ${site_dir}/static/purpose-theme/css/
cp ./dist/css/theme.min.css ${site_dir}/static/purpose-theme/css/

# Clean up
rm -Rf /tmp/${theme_filename}

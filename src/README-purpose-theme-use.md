This file describes what to do in order to update or modify the Purpose theme.

Update CSS
==========

We keep our modifications to the purpose CSS in the `purpose-user-css` directory. Follow these instructions to modify theme CSS:

1) Modify the files in the `purpose-user-css` directory.
2) Unzip the theme.
3) Copy the contents of the `purpose-user-css` directory to the `assets/scss/user` directory in the theme.
4) Do `gulp build` in the theme directory, then copy the resulting css files from `dist/css/` theme directory to the website's `static/css/` directory.

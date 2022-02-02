# Hello, this is a basic project with GULP.

This project can serve as a basis for the development of your site or app.

### To use this project, you must follow these steps:

1. Download this repository as a .zip file. It is important to download it as a zip and NOT clone it, because with 'git clone url_repository' the commits and the link to this repository are cloned.
2. In the root of the project, run 'npm install'.
3. Link the downloaded local project, with your remote project.
4. Run 'git subtree push --prefix dist origin gh-pages' to grab the files from dist/ when deploying.
5. Run 'gulp'. This will bring up a development environment to start working.
6. When you are about to push the changes to production, run 'gulp clean' to further optimize your CSS code.
7. The minified and compiled code will be inside 'dist/'.

### Note: GULP is a task automator that takes care of the following,

- In .html files, minify, remove comments and remove spaces.
- In .scss files, minify, remove spaces, add necessary prefixes to make the code compatible with all browsers, and remove code that is NOT being used or is being repeated.
- In .js files, minify, remove spaces, and compile to legacy code (ES5) for cross-browser compatibility.

# Greetings and thanks for reading!

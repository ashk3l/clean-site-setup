#Welcome! This is here to help you understand this project setup.

The goal of this project is to have a clean site setup that can easily be used in new projects. It uses several existing projects to support it. See below for details and attributions.

##Getting started

Clone this repo into your working directory. Then run the following commands:

    npm install

    bower install
    
Once your dependencies are installed then you can use the following grunt tasks:

    grunt 
    
The "grunt" task will run a build by uglifying your JS files and compiling your CSS.

    grunt dev
    
The "grunt dev" task will launch a browser-sync server to watch your files and automatically reload whenever you make changes to HTML, JS or SCSS files.

##This project uses SASS for it's CSS architecture. 

It's the industry standard for writing manageable CSS code. Are you new to SASS? Learn more about it here:

[http://alistapart.com/article/why-sass]

[http://thesassway.com/beginner/how-to-structure-a-sass-project]

##Bootstrap is installed and ready to go

Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

[http://getbootstrap.com/]

##FontAwesome is used for icons.

Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.

[http://fortawesome.github.io/Font-Awesome/]

##A basic Grunt file has also been setup for you!

A powerful yet simplistic Grunt file setup includes a watch task for SCSS compiling, image optimization, browser-sync and more.
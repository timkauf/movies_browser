Movie Browser
==============

Slalom Silicon Valley Software Engineering
Coding Exercise #04
------------------------------------------

A small test project using AngularJS and Bootstrap

Occasionally the movie data can be slow to load, so just wait a bit or refresh.


User Experience
===============
The image of the movie poster is a very strong association and makes for quick identification by the user. So the design chosen emphasizes the poster images, with the title being of medium weight, and other information very small, to be read if desired, but not relied upon for identification/navigation.

The bootstrap grid is responsive, showing six movies across in larger windows, four across for tablet type screens, and three across for phones. For larger datasets it may actually be necessary to have inner and outer ng-repeat loops, the outer (row) loop being conditional on the index of the item. I.e. if you want rows of four, only every fourth item will the outer ng-repeat be allowed to create a new row.

One improvement needed for larger real world data collections would be not having the description in a static block. With a lot of movies the user must scroll down, losing site of that description area. A popover bubble in the same vicinity as the movie image would be a better choice.


Architecture
============
The AngluarJS framework was used to ensure separation of the data model from the HTML view. This also provided handy features such as filtering and the $HTTP module. The framework was a bit of overkill for this small project, but would show its importance more as the size of data and additional features increase.


Scaling Up
==========
As the application grows new features and modules, it would be good to divide the file structure by module, rather than having one central js/ or controllers/ folder, etc. Any common services that would be reused/shared should be separated out in a services area, such as the HTTP connection to retrieve the movie data. These services can themselves be APIs, through Restful calls for instance. In fact these different services can then become different code repositories, each with their own versioning via Git tagging or what have you.
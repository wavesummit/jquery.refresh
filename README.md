jquery.refresh
==============

A jQuery refresh plugin used to refresh images on an interval.
For example the following will find all images with the class refresh, and refresh them every 5 seconds. 

$('.refresh').refresh(5000);

The following will find all images and refresh them every 10 seconds. 

$('img').refresh(10000);

Make sure to load jQuery before this script, and make sure that the images have loaded before calling this function.

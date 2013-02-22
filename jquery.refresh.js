(function($){
 jQuery.fn.refresh = function(interval){
    return this.each(function(){
        var img = $(this),
        src = img.attr('src'),
        t = function(){
          var d = new Date(),
          n = d.getTime();   
          img.attr('src', src +'?'+ n);
        };
        window.setInterval(t,interval);
    });
}   
}(jQuery));

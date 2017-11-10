(function () {
    /*global $ */

    "use strict";


    var textBox = $('#textBox'),
        i = 0,
        body = $('body');
    /*fw = $('#fw'),
    rw = $('#rw');*/


    $('#search').submit(function (event) {
        $('span').empty();
        $('div').empty();

        console.log('works');
        event.preventDefault();
        // });
        var text = textBox.val();
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=' + text + '&format=json&jsoncallback=?', function (data) {
            console.log(i);
            console.log(data);

            console.log(data.items[0].title);
            console.log('hello');
            /*          
            body.append('<span class="single">' + data.items[i].title + '</span>');
             body.append('<div class="single">' + '<img src=' + data.items[i].media.m + '>' + '</div>');
             fw.click(function(){
                
                i++;
                $('.single').text(  data.items[i].title );
              $('.single')('<div>' + '<img src=' + data.items[i].media.m + '>' + '</div>');
                console.log(i);
            });
            rw.click(function(){
                --i;
                body.append('<span>' + data.items[i].title + '</span>');
             body.append('<div>' + '<img src=' + data.items[i].media.m + '>' + '</div>');
                console.log(i);
            });*/
            /* for (var i = 0; i < data.items.length; i++) {
                 body.append('<span>' + data.items[i].title + '</span>');
                 //pictureElem.attr('src', data.items[i].media.m);
                 body.append('<div>' + '<img src=' + data.items[i].media.m + '>' + '</div>');
             }*/
             Object.keys(data.items).forEach(function (key) {
                   body.append('<div>' + data.items[key].title + '</div>'+
                   '<div>' +'<img src=' + data.items[key].media.m + '>' + '</div>');
               });

           /* data.items.forEach(function (item) {
                body.append('<div>' + data.items[item].title + '</div>' +
                 '<div>' + '<img src=' + data.items[item].media.m + '>' + '</div>');
            });
            */

        }).fail(function (jqXHR, a, b) {
            console.log('Error:', jqXHR.responseText, a, b);

        });

    });
} ());




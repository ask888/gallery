
// slider



$(function () {
    var arr = [{"small": "img/1sm.jpg", "big": "img/1.jpg"}, {"small": "img/2sm.jpg", "big": "img/2.jpg"}, {"small": "img/3sm.jpg", "big": "img/3.jpg"}, {"small": "img/4sm.jpg", "big": "img/4.jpg"}, {"small": "img/5sm.jpg", "big": "img/5.jpg"}, {"small": "img/6sm.jpg", "big": "img/6.jpg"}, {"small": "img/7sm.jpg", "big": "img/7.jpg"}, {"small": "img/8sm.jpg", "big": "img/8.jpg"}, {"small": "img/9sm.jpg", "big": "img/9.jpg"}, {"small": "img/10sm.jpg", "big": "img/10.jpg"}, {"small": "img/11sm.jpg", "big": "img/11.jpg"}, {"small": "img/12sm.jpg", "big": "img/12.jpg"}];
    var flag = 1;
    for( var i = 0; i<arr.length; i++ ){
        $('.slider').append($('<img>').attr('src', arr[i].small).attr("data-big-img", arr[i].big));
    }

       $('#top').click(function(e){
           e.preventDefault();
           if(flag > 1){ //flag === 1 || flag === 2
               $('.slider').animate({bottom:'-=204px'},300);
               flag--;
           }

       });

        $('#bottom').click(function(e){
            e.preventDefault();
            if(flag < 10){ //flag === 2 || flag === 3
                $('.slider').animate({bottom:'+=204px'},300);
                flag++
            }
        });
    $('img').on('click', function () {
        $('.slide').html('').append($('<img>').attr('src', $(this).attr('data-big-img')));
    })
});
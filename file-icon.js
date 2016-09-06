$(function(){
    $('tr').each(function(i, elem) {
        var $td = $(elem).find('td').eq(1);
        var filename = $td.text();
        if(/\.zip/.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_page_white_zip\'></i>');
        }
        if(/\.pdf/.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_page_white_acrobat\'></i>');
        }
        if(/\.xls/.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_page_excel\'></i>');
        }
        if(/\.ico/.test(filename) || /\.png/.test(filename) || /\.gif/.test(filename) || /\.jpg/.test(filename) || /\.jpeg/.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_image\'></i>');
        }
        if(/\.css/.test(filename) || /\.js/.test(filename) || /\.html/.test(filename) || /\.htm/.test(filename) || /\.jade/.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_page_white_text\'></i>');
        }
        if(/\//.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_folder\'></i>');
        }
    });

    $('a').on('mouseover', function(){
        var $this = $(this); 
        var href = $this.attr('href');
        
        if(/.jpg|.gif|.png$/.test(href)){
            var top = $this.offset().top + 20 + "px";
            var left = $this.offset().left + 200 + "px"
            $('body').css({position:"relative"});
            var img_position = 'position:absolute; top:'+top+'; left:'+left+';width: 300px;';
            $('body').append('<img class="thambnail" src="'+$this.attr('href')+'" style="'+img_position+'">');
        }
    });
    $('a').on('mouseout', function(){ 
        $('.thambnail').remove();
    });

});

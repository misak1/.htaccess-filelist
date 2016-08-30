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
        if(/\.ico/.test(filename) || /\.png/.test(filename) || /\.gif/.test(filename) || /\.jpg/.test(filename) /\.jpeg/.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_image\'></i>');
        }
        if(/\//.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_folder\'></i>');
        }
    });
});

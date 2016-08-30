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
        if(/\//.test(filename)){
            console.log(filename);
            $td.prepend('<i class=\'sprite_folder\'></i>');
        }
    });
});

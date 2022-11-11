
$( document ).ready(function() {
    $('.nav-link-1').on('show.bs.tab', function (e) {
        $(this).children('img').attr('src','./assets/images/info-icon.svg');
    })
    $('.nav-link-1').on('hide.bs.tab', function (e) {
        $(this).children('img').attr('src','./assets/images/info-icon-d.svg');
    })
    $('.nav-link-2').on('show.bs.tab', function (e) {
        $(this).children('img').attr('src','./assets/images/op-icon.svg');
    })
    $('.nav-link-2').on('hide.bs.tab', function (e) {
        $(this).children('img').attr('src','./assets/images/op-icon-d.svg');
    })
    $('.nav-link-3').on('show.bs.tab', function (e) {
        $(this).children('img').attr('src','./assets/images/administration-icon.svg');
    })
    $('.nav-link-3').on('hide.bs.tab', function (e) {
        $(this).children('img').attr('src','./assets/images/administration-icon-d.svg');
    })

});


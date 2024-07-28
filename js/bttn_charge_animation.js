$(document).ready(function() {
    $('.item2_blik_active').hide();
    $('.item2_przelewy24_active').hide();
    $('.item2_klarna_active').hide();

    $('.item2_blik').click(function() {
        $('.item2_blik').hide();
        $('.item2_przelewy24_active').hide(); 
        $('.item2_klarna_active').hide(); 
        $('.item2_blik_active').show();
        $('.item2_przelewy24').show(); 
        $('.item2_klarna').show(); 
    });

    $('.item2_przelewy24').click(function() {
        $('.item2_przelewy24').hide();
        $('.item2_blik_active').hide(); 
        $('.item2_klarna_active').hide(); 
        $('.item2_przelewy24_active').show();
        $('.item2_blik').show(); 
        $('.item2_klarna').show(); 
    });

    $('.item2_klarna').click(function() {
        $('.item2_klarna').hide();
        $('.item2_blik_active').hide(); 
        $('.item2_przelewy24_active').hide(); 
        $('.item2_klarna_active').show();
        $('.item2_blik').show(); 
        $('.item2_przelewy24').show(); 
    });
});

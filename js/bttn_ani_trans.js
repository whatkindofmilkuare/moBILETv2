if (window.location.pathname.endsWith('charge.html')) {
    $(document).ready(function() {
        $('.item2_blik').hide();
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
}



if (window.location.pathname.endsWith('long_dis_trans.html')) {
    $(document).ready(function() {
        $('#history_content').hide();
        $('#napis_history').hide();
        $('#topbutton1_noactive').hide();
        $('#topbutton2_active').hide();
    
        $('#topbutton2_noactive').click(function() {
            $('#carrier_content').hide();
            $('#history_content').show();
            $('#napis_carrier').hide();
            $('#napis_history').show();
            $('#nexticon').hide();
            $('#topbutton1_noactive').show();
            $('#topbutton2_active').show();
            $('#topbutton1_active').hide();
            $('#topbutton2_noactive').hide();
        });
    
        $('#topbutton1_noactive').click(function() {
            $('#carrier_content').show();
            $('#history_content').hide();
            $('#napis_carrier').show();
            $('#napis_history').hide();
            $('#nexticon').show();
            $('#topbutton1_noactive').hide();
            $('#topbutton2_active').hide();
            $('#topbutton1_active').show();
            $('#topbutton2_noactive').show();
        });
    });
}



if (window.location.pathname.endsWith('public_trans.html')) {
    $(document).ready(function() {
        $('#history_content').hide();
        $('.napis_history').hide();
        $('.topbutton1_noactive').hide();
        $('.topbutton2_active').hide();
    
        $('.topbutton2_noactive').click(function() {
            $('#public_trans_content').hide();
            $('#history_content').show();
            $('.napis_public_transport').hide();
            $('.napis_history').show();
            $('.skyscapericon').hide();
            $('.topbutton1_noactive').show();
            $('.topbutton2_active').show();
            $('.topbutton1_active').hide();
            $('.topbutton2_noactive').hide();
        });
    
        $('.topbutton1_noactive').click(function() {
            $('#public_trans_content').show();
            $('#history_content').hide();
            $('.napis_public_transport').show();
            $('.napis_history').hide();
            $('.skyscapericon').show();
            $('.topbutton1_noactive').hide();
            $('.topbutton2_active').hide();
            $('.topbutton1_active').show();
            $('.topbutton2_noactive').show();
        });
    });
}



if (window.location.pathname.endsWith('parking.html')) {
    $(document).ready(function() {
        $('#history_content').hide();
        $('#napis_history').hide();
        $('.topbutton1_noactive').hide();
        $('.topbutton2_active').hide();
    
        $('.topbutton2_noactive').click(function() {
            $('#locations_content').hide();
            $('#history_content').show();
            $('#napis_parking').hide();
            $('#napis_history').show();
            $('.skyscapericon').hide();
            $(".topbutton1_noactive").fadeIn(500); 
            $(".topbutton2_active").fadeIn(500); 
            $('.topbutton1_active').hide();
            $('.topbutton2_noactive').hide();
        });
    
        $('.topbutton1_noactive').click(function() {
            $('#locations_content').show();
            $('#history_content').hide();
            $('#napis_parking').show();
            $('#napis_history').hide();
            $('.skyscapericon').show();
            $('.topbutton1_noactive').hide();
            $('.topbutton2_active').hide();
            $('.topbutton1_active').fadeIn(500);
            $('.topbutton2_noactive').fadeIn(500);
        });
    });
}
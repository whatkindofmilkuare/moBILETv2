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
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
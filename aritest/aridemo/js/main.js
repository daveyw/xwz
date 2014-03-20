window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

// this function is called by the id of the button
$(document).ready(function() {
    $("#convertbutton").click(function() {
        var metricValue = $("#metricinput").val();//textbox value 
        var imperialValue = $("#imperialinput").val();


        if (((metricValue.length !=0) && (imperialValue.length !=0)) // checking for empty box
            || ((metricValue.length == 0) && imperialValue.length == 0)) {
            alert("Please set one field to convert")
        }
        if (metricValue.length != 0) {
            $("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));// call the converter funcation in converter js passing metric value
        }
        else if (imperialValue.length != 0) {
            $("#metricinput").val(Converter.convertFromMetricToImperial(imperialValue));// call the converter funcation in converter js passing inperial value
        }
    });

    // if the clear button is pressd
    $("#clearbutton").click(function() {
        $("#imperialinput").val('');// blank txt box
        $("#metricinput").val(''); // blank the txtbox
    });

});
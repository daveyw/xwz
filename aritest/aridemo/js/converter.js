var Converter = (function() {

    // Private stuff up here
    var converterValue = 2.2;


    // Public methods here
    return {
        convertFromPoundsToKIlo: function(weight) { //weight is the value of the txtbox
            var num = parseInt(weight); //weight is converted to a intger
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = num / converterValue; //weight is divied by  2.2
            return Math.round(num); // rounds the weight off to discret value
        },

        convertFromMetricToImperial: function(weight) {
           return weight * converterValue; // returns weight multiplyed by 2.2
        }

    }
}())
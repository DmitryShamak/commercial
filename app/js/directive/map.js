module.exports = function(template) {
    return function($timeout) {
        return {
            restrict: 'A',
            replace: true,
            template: template,
            link: function($scope, element, attr) {
                function initMap() {
                    var myLatLng = {lat: 53.9046147, lng: 27.5485772};
                    var map = new google.maps.Map(element.find("#map")[0], {
                        center: myLatLng,
                        scrollwheel: false,
                        zoom: 18
                    });

                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map
                    });
                }
                if(window.google) {
                    initMap()
                } else {
                    $timeout(initMap, 1000);
                }
            }
        }
    }
};
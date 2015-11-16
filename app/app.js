var CVModel = function() {
    var self = this;
    var school = ko.observableArray();

    var init = function(){
        $.getJSON('data.json', function(data) {
            //cv = ko.mapping.fromJS(data.school);


        });
    };
    init();

};

ko.applyBindings(new CVModel());
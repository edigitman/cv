var CVModel = function() {
    var self = this;
    var cv = null;

    var init = function(){
        $.getJSON('data.json', function(data) { cv = ko.mapping.fromJS(data); });
    }
    init();

};

ko.applyBindings(new CVModel());
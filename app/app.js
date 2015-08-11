var CVModel = function() {
    var self = this;
    var cv = null;

    var init = function(){
        $.getJSON('data.json', function(newResult) {
            cv = ko.mapping.fromJS(newResult.Data);

        });
    }
    init();

};

ko.applyBindings(new CVModel());
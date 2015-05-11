ko.components.register('ko-text', {
    viewModel: function(params) {
        this.text = ko.observable(params && params.text() || '');
    },
    template: '<input data-bind="value: text, valueUpdate: \'input\'" />'
});
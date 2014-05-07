Widgets = new Meteor.Collection('widgets');

if (Meteor.isClient) {

  Router.configure({
    layoutTemplate: 'layout'
  });

  Router.map(function() {
    this.route('helloWidget', {
      path: '/widget',
      waitOn: function() {
        return [ Meteor.subscribe('widgets') ];
      }
    });
  });

  Template.helloWidget.widget = function () {
    return Widgets.findOne().label;
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Widgets.find().count() === 0) {
      Widgets.insert({ label: 'foo' });
      Widgets.insert({ label: 'bar' });
      Widgets.insert({ label: 'baz' });
    }
  });

  Meteor.publish('widgets', function() {
    return Widgets.find();
  });
}

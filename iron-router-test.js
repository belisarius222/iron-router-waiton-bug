Widgets = new Meteor.Collection('widgets');

if (Meteor.isClient) {

  Router.configure({
    layoutTemplate: 'layout'
  });

  Router.map(function() {
    this.route('helloWidget', {
      path: '/widget',
      waitOn: function() {
        return [
          Meteor.subscribe('widgets', function() {
            console.log('Susbcription ready.');
          })
        ];
      }
    });
  });

  Template.helloWidget.widget = function () {
    if (! Widgets.findOne()) {
      console.log('No widgets found!');
      return 'No widgets found.';
    }

    // Without checking for the presence of a widget, this throws an error.
    return Widgets.findOne().label;
  };

  Template.helloWidget.rendered = function() {
    console.log('Widgets.find().count() in rendered: '+Widgets.find().count());
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

Teambox.Controllers.UsersController = Backbone.Controller.extend({
  routes: {
    '/users/:id'         : 'users_show'
  },

  users_show: function() {
    $('content').update( 'show user' );
  }
});

_.extend(Teambox.Controllers.UsersController.prototype, Teambox.Views.Utility);
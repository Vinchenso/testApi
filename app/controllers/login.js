import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    login() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});

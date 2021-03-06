import Ember from 'ember';

export default Ember.Component.extend({
  addNewVideo: false,
  actions: {
    videoFormShow() {
      this.set('addNewVideo', true);
    },
    saveVideo() {

     var params = {
       username: this.get('username'),
       videodescription: this.get('videodescription'),
       videourl: this.get('videourl'),
       rating: 0,
       comment: this.get('comment'),
       challenge: this.get('challenge'),
     };
     this.set('addNewVideo', false);
     this.sendAction('saveVideo', params);
   }
  }
});

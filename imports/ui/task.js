// 9.4  Replace update and remove with methods
import { Meteor } from 'meteor/meteor'
// 5.3  Add event handlers for Task buttons
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html'

// 10.6  Define helper to check ownership
Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
})

Template.task.events({
  'click .toggle-checked'() {
    // 9.4  Replace update and remove with methods
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked)
  },
  'click .delete'() {
    // 9.4  Replace update and remove with methods
    Meteor.call('tasks.remove', this._id)
  },
  // 10.8  Add event handler to call the setPrivate method
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});

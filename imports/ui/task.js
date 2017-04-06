// 9.4  Replace update and remove with methods
import { Meteor } from 'meteor/meteor'
// 5.3  Add event handlers for Task buttons
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

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
});

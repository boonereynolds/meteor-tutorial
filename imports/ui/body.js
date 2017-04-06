import { Template } from 'meteor/templating'

// 7.3  Add state dictionary to the body
import { ReactiveDict } from 'meteor/reactive-dict'

import { Tasks } from '../api/tasks.js'

// 5.4  Import Task component from the body
import './task.js'
import './body.html'

// 7.3  Add state dictionary to the body
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
})

Template.body.helpers({
  tasks() {
    // 7.5  Add helpers to body template
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Otherwise, return all of the tasks
    // 4.3 Show newest tasks at the top
    return Tasks.find({}, { sort: { createdAt: -1 } })
  }
})

// 4.2 Add event handler for form submit
Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault()


    // Get value from form element
    const target = event.target
    const text = target.text.value

    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    })

    // Clear form
    target.text.value = ''
    console.log(event)
  },
  // 7.4  Add event handler for checkbox
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
})

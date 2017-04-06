import { Template } from 'meteor/templating'

import { Tasks } from '../api/tasks.js'

import './body.html'

Template.body.helpers({
  tasks() {
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
  }
})

// 8.3  Configure accounts-ui
import { Accounts } from 'meteor/accounts-base'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
})

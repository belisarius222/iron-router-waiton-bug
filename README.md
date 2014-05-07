iron-router-waiton-bug
======================

A reproduction of iron-router issue 616, where a template gets rendered before its waitOn hook returns.

Instructions
============

Git clone the repo, run `mrt install`, and then run Meteor. If you're running locally, go to
http://localhost:3000/widget

To see an online version, go to:
http://iron-router-waiton-bug.meteor.com/widget

Check the console logs to see that the template gets rendered before the waitOn hook is ready.  You might also be able to see the text on the screen flicker.

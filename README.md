iron-router-waiton-bug
======================

A reproduction of iron-router issue 616, where a template gets rendered before its waitOn hook returns.

Instructions
============

Git clone the repo, run `mrt install`, and then run Meteor.  Check the console logs to see that the template gets rendered before the waitOn hook is ready.

iron-router-waiton-bug
======================

A reproduction of iron-router issue 616, where a template gets rendered before its waitOn hook returns.

Instructions
============

Git clone the repo, run `mrt install`, and then run Meteor.  You should see an error in the console that looks something like this:
Exception from Deps recompute function: TypeError: Cannot read property 'label' of undefined

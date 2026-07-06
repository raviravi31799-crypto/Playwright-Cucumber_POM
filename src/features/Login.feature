Feature:Login functionality of Tutorialsninja

Background:
Given the tutorialsninja application is launched 
And the user selects myaccount link and opts Login

Scenario:Valid login
And the user enters valid login email and password 
When the login is clicked
Then the user is able to view dashboard page


Scenario:Invalid login
And the user enters invalid login email and password 
When the login is clicked
Then the user receives an error message 
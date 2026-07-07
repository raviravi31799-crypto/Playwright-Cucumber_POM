Feature:Register functionality of tutorials ninja

Background:
Given the user launched the application
And selects Register option

Scenario:Register with valid datas
And the user enters all valid datas
|fname |lname|email           |phone     |password|cpassword|
|Sanvis|Jay  |sasvik@gmail.com|1234567890|sanvis  |sanvis   |
When the user clicks on register button
Then user receives a text marking the successful account creation

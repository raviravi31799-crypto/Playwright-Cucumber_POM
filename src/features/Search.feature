 Feature: Search functionality 

 Background:
 Given the user launched to the homepage of the application

Scenario Outline: Search through valid keyword
And the user enters the valid "<Keyword>"
When clicks on search button 
And the products related to search are displayed
When the user clicks on Addtocart to a product
Then the success "<message>" is displayed intimating product is added to cart

Examples:
|Keyword|message                                                |
|Iphone | Success: You have added iPhone to your shopping cart! |
|Macbook| Success: You have added MacBook to your shopping cart!|
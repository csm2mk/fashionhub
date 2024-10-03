This Cypress suite covers the following tests:

Test Case 1
• As a tester, I want to make sure there are no console errors when you visit
https://pocketaces2.github.io/fashionhub/
Hint: you can use the about page to test your implementation as this contains an intentional error

Test Case 2
• As a tester, I want to check if a page is returning the expected status code
○ Fetch each link (e.g. <a href=””/> on
https://pocketaces2.github.io/fashionhub/) and visit that link to verify that:
■ the page returns 200 or 30x status codes
■ the page returns no 40x status codes

Test Case 3
• As a customer, I want to verify I can log in to
https://pocketaces2.github.io/fashionhub/login.html
Hint: use the following details to login: Username: demouser Password: fashion123

Test Case 4
• As a product owner, I want to see how many open pull requests are there for our product. You
can use https://github.com/appwrite/appwrite/pulls as an example product
• Output is a list of PR in CSV format with PR name, created date and author

In order to run the tests, follow these steps:

1. Install Cypress from https://www.cypress.io/
2. Pull this project locally
3. Open Cypress - Add project - drag & drop the project (/fashionhub) to Cypress
4. Select E2E testing
5. Choose a browser - Start E2E Testing in (browser_name)
6. Select the corresponding Test Case and run it

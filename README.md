# DSGN 270 Assignment 3 - Social Integration Proof-of-Concept

Author: Byung Uk An

1. Business: BurgerBurger restaurant
2. Requirement: BurgerBurger restaurant has a Twitter account to advertise the place and its menu through social networking community. The owner want to display the tweets of the restaurant for the visitors of website to give them easy access to the restaurant's contents on Twitter.

3. SNS platform: Twitter



--------------------------
Using a secure platform of your choice, display this content on a webpage so that it solves your defined problem.
Create user documentation describing to the client how to update their content on the Social Media platform so that it updates on their website.
Create developer documentation outlining the steps taken to set up the API connection in case it needs to be repeated.


Marking Rubric - 50 points
Each of the following criteria will be worth 10 points.
1. Market and Problem definition - 10 points
•	5 points: Define a User Story for your target client. It should follow the format covered in the first half of this course:
o	As a bar owner, I'd like my #daily-special Instagram updates to show up on my website because some of my regulars don't use social media.
•	5 points: 100-150 word summary of the market and problem that your social media integration solves
o	What's the target market for this integration? Who would pay to have this installed on their website?
o	What problem/pain does the integration solve?
o	How does the choice of social tool contribute to the solution?
2. Test account with sample content - 10 points
Choose a social media tool that solves your market problem and User Story.
•	Create a new account; do not use your actual account. You may use one of the following for an email address:
o	SAIT email account;
o	Email attached to a free .me domain (available with the GitHub Developer Pack);
o	Your primary email with plus addressing.
•	Account contains at least three non-lorem posts that support the defined market and problem.
o	Content does not have to be original and can be based on open source content.
o	Content must support the User Story (i.e. a "daily special" post should be an image of food, not a sunset).
o	Talk to your instructor if three posts is not appropriate for the social tool you have chosen. For example, you're not expected to edit three separate videos for a YouTube integration.
3. Operational integration with Task Flow - 10 points
Create a public web page that displays social content in a way that supports your User Story.
To be included in the project README. Define instructions as a Task Flow for the potential client to test the integration. For example:
1.	Go to web page and take note of the current content.
o	content can be displayed using an embed strategy offered by the social tool.
2.	Log into social tool (include creds in brightspace comment).
3.	Make a change or add a new post in social tool admin.
4.	Refresh output page to confirm content has changed.
Further notes:
•	Attempts should be made to extend the functionality beyond any examples covered in class. In other words, don't just copy what your instructor did.
•	Points given for unique use of the tool that goes beyond simply displaying content. For example:
o	Content only displayed when a particular hashtag is present in description.
o	Displaying content that is added to a particular collection.
o	Displaying a list with pagination.
•	Task can be to create a new post (i.e. new "daily special" OR edit the existing content in some significant way that supports the User Story (i.e. label an existing post as "featured" to change the output of the integration).
•	One of the three non-lorem posts may be used as sample content for the client to use to create a new post.
•	Include relevant supporting links from the user documentation of the social tool you've chosen (i.e. "How to create an Instagram Post" from the IG website).
•	Your instructor will follow these instructions to mark this assignment so be clear and concise.
4. Custom Branding using an API endpoint - 10 points
•	5 points: Output content from a Developer API to show that content can be displayed with a custom design and brand colours.
•	5 points: In the project README, include relevant links from the Developer API Documentation:
o	General Usage
o	Rate limits
o	Authentication methods
o	Creating a token
o	Endpoint Reference
5. Secure API token/key - 10 points
•	Points given for not displaying API key or token in public source code.
•	You may use a method of your choice to do this, such as:
o	A proxy endpoint created in Node or a serverless function.
o	Calling the API during the build process of a framework such as Eleventy or Nuxt.
•	In your README, include details of how you secured your API, along with links to relevant documentation.
 
General Requirements
•	README should use elements of visual hierarchy to make content readable. For example:
o	Use proper headings to label the sections of the Rubric (Market/Problem definition, usage instructions, API documentation, etc)
o	Use code blocks when appropriate
o	Step-by-step instructions should use numbered lists.
•	Code should follow proper conventions (indentation, naming, etc);
•	README and integration should reflect a real-world solution to a market problem that a client would find valuable.
 
Submitting Your Assignment
In order to receive a grade, you must:
1.	Deploy your integration using a hosting method of your choice (i.e. GH Pages, Heroku, Netlify, etc).
2.	In addition to the requirements of the assignment, include the following in your project README.md:
o	Course title and author name;
o	Any comments that may help squeeze marks out of your instructor (maybe give him hints on where to look for the requirements above);
o	Attributions for any code or assets that are not your own.
3.	Zip your project (excluding node_modules and .env file) and submit them to Brightspace.
4.	Include the following as a comment with your Brightspace submission:
o	Relevant GH repo(s);
o	Live integration link;
o	Link to the social media test account;
o	Login information for the social media test account.
 
Appendix Example platforms:
1. JAMstack with proxy
•	No backend server
•	API calls come from a static website
•	Use a serverless function (i.e. on Netlify) to secure the API Key
2. Nuxt build
•	API is called at build time (secure)
•	Content is displayed statically after it's generated at build time
3. Node as proxy
1.	Custom API is called from your page to your Node endpoint.
2.	Node requests data from the API on the backend (secure).
3.	Node sends the response data back to the client.
![image](https://user-images.githubusercontent.com/90792644/144727533-1be949c3-1720-43ae-8033-198575509b44.png)

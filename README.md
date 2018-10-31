# homework-assignment-1
Homework assignment #1 for Nodejs Master Class

# Requirements
Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 

2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

# Results

1. Ports  
  * 3000 for staging
  * 5000 for production
2. Route  
  * hello will return 200 and "Welcome to my API"
  * others will return 404 error
3. Environments  
  Accessing by **NODE_ENV**  
    * Possible env: 
      * Staging
      * Production
    * Default: Staging
  Ex: In app **root** directory:  
    run: "NODE_ENV=production node index.js" will run server on **production** mode


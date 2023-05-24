
# Backend Development with Express.js and MongoDB

## About the Assignment 

**  Backend development using Express.js and MongoDB created a simple RESTful API that performs CRUD (Create, Read, Update, Delete) operations on a collection in a MongoDB database. **

## Built with 

- Node.js
- Express.js
- Java Script
- Mongo Db
- Mongoose
- Winston

## Getting Started

To get a local copy up and running, please follow these simple steps.

 ### Prerequisites
  
   Here is what you need to be able to run this assignment.
    
    - Node.js 
    - MongoDb
    - Npm

## Development 
 
 ### Setup

   1 Clone the repo into a public GitHub repository with this link
      
         https://github.com/shindeamul76/furation-backend.git

   2 Go to the project folder
        
         cd furation-backend

   3 Install packages with npm

        npm install 

   4 Set up your .env file

     _ Duplicate .env.example to .env
     _ Use MONGO_URL as your mongo db url
    

### Quick start with npm start
   
    npm start


## For testing the API's 

1.  Creating a item with all fields are required POST API
     http://localhost:4000/api/items
2   Updating a item with params id  PUT API
     http://localhost:4000/api/items/id
3   Deleting a item with params id  DELETE API
     http://localhost:4000/api/items/id
4   Getting a item with params id  GET API
     http://localhost:4000/api/items/id
5   Getting all items with GET API
     http://localhost:4000/api/items
6   Getting all items with Pagination on GET API
     http://localhost:4000/api/items?page=1&limit=5
      
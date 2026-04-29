/*
node js is runtime environment that lets run javasript code outside the browser.
build on chrome's v8 javascript engine.
used to create fast,scalable web applications.

Express js :---
 - express is a minimal and flexible web framework for node js.
 - it helps to handle routs , middleware, and http requests easily.
 - makes backend development fast and simple.

why we use express js : 
 - simplifies server creation in node js. it offers powerfull features life , routing , middleware
   static file serving, error handling.

NPM : Node package Manager
   - npm is tools to install packages or libraries from the node js ecosystem.


Q.what is package.json
    - package.json is a file that contains metadata about a node js project and its dependencies.
Q.different betn package.js and package-lock.json 
    - package.json is a file that contains metadata about a node js project and its dependencies.
    - package-lock.json is a file that contains the exact version of each dependency installed in a node js project. 
       it is automatically generated when you run npm install and should not be manually edited. 
      it helps to ensure that the same versions of dependencies are installed across different environments and machines.
Q.diff dev dependancy.:
    - dev dependencies are packages that are only needed during development and testing of a project. 
    they are not required for the production environment. examples of dev dependencies include testing frameworks, linters, and build tools.

   activity - http requests.
   http request is a message sent by a client to a server to request data or perform an action.
    types of http request :
    1. GET : used to retrieve data from a server.
    2. POST : used to send data to a server to create a new resource.
    3. PUT : used to update an existing resource on a server.
    4. DELETE : used to delete a resource from a server.
*/
const express = require('express');
const app = express();
const port = 3002;
app.get('/hello',(req,res) => {
    const currentTime = new Date();


res.json({
    message : 'Hello, World!',
    time : currentTime
}) 

})
app.listen(port,() => {
    console.log(`Example app listening on port http://localhost:${port}`);   
}
)

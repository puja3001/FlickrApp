# FlickrApp
Test Application for Isentia

> This application reads the public feeds on Flickr using this link http://www.flickr.com/services/feeds/photos_public.gne?format=rss_200 and displays them on a web page.
> User can also add any number of tags in the search box and search for their preferred images.

### Technology
  #### Backend
  1. NodeJS(v10.15.3)
  2. Express(4.17.0)
  3. Mocha and Chai (Test framework)
  
  #### Frontend
  1. Angular7
  2. Karma and Jasmine (Test framework)
  
### To run the application:
#### *Pre-requisites:*
1. Install NodeJS
 
#### *Steps to run*
1. Download or clone the repository.
2. Open terminal and navigate to the code repsoitory.
3. Run `node install` to install all the pacakges.
4. Run the command `node server.js`.
5 The application can be accessed through `http://localhost:5000/`.

#### *To test the application (backend)*
1. Open terminal and navigate to the code repsoitory.
2. Run the command `npm test`, the test results will be shown on the console.

### Front-end application
The frontend application files can be access from *frontend-app* folder.
The application can be run independently:
1. Navigate to the frontend-app folder in the terminal.
2. Run the commmand `ng serve`, the application can be accessed through `http://localhost:4200/`.

#### *To test the application (frontend)*.
1. Navigate to the frontend-app folder in the terminal.
1. Run the command `ng test`, the test results can be seen on `http://localhost:9876/`.



  
 



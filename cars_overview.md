### Cars Routes
| Route Name     | Request Method | Example Request URL |  Route                   
|----------------|----------------|---------------------|----------------------
| cars index     | `GET`          | `/cars`            |  `/cars`
| cars show page | `GET`          | `/cars/1`          |  `/cars/:car_id`
| cars edit      | `GET`          | `/cars/1/edit`     |  `/cars/:car_id/edit`
| cars update    | `POST`         | `/cars/1/`         |  `/cars/:car_id`
| cars new page  | `GET`          | `/cars/new`        |  `/cars/new`
| cars create    | `POST`         | `/cars`            |  `/cars`
| cars destroy   | `GET`          | `/cars/1/destroy`  |  `/cars/:car_id/destroy`

### Car Table
| Column Name    | Data Type             
|----------------|----------------
| id            | SERIAL          
| year          | INT     
| make          | STRING         
| model         | STRING    
| miles         | INT    
| price         | INT  
| photo_url     | STRING  
| location_id   | INT  

### User Stories
* As a user, I can see all of the cars with the year, make, model and the dealerships they are located at.
* As a user, when I click one of cars in the list, I am taken to a page that shows me the full details about that car.
* As a user, when I click the add button, it takes me to a form that allows me to add a car to the list.
* As a user, I am able to remove a car from this list by clicking the delete button next to the car.
* As a user, I can click the edit button to take me to a form that will let me edit the car.
* As a user, I can add a car to the comparison tool by clicking the "compare" button.

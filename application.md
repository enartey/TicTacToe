# Class structure

Project is broken into three components, model, view, and controller. 

# Model
The model (model.js) contains the business logic of the application. This file handles data interactions and maintains the state of the game for the application. Contains the methods of the application.

# View
The view (index.html) handles the user interface and is responsible for displaying the data from the model, such as the board.

# Controller
This file (controller.js) binds the model to the view/UI and listens at the top level for changes in the model/view. If there is a change in the model it notifies the UI to update appropriately. If there is an event in the view (user clicks on board) the model is modified via the controller to verify this event and either update the board or ignore the event.
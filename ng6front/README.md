# Basic information about the project:

'ng6front' project is used to develop a single page web application using Angular 6 as a front-end technology, jQuery DataTables and Bootstrap as a CSS framework.
Currently this application consumes CRUD Restful APIs developed and exposed by a Node.js + Express server ('nodebackend' application).

# Front end technologies

Angular 6
Bootstrap 4
npm-6.9.0
JQuery

# Prerequisites:

You have to set up the MongoDB environment to store all data and
install Node.js runtime to build the server.

# Workflow

1.  Run MongoDB server from the Terminal or Command Prompt:

cd MongoDB_INSTALL_LOCATION/Server/4.0/bin/
mongod

=> MongoDB connection established successfully

2.  Run Node.js server from the Terminal or Command Prompt:

cd LOCATION_WHERE_CLONED/passport-registry/nodebackend
npm install
npm run dev

=> Express server running on port 3030
MongoDB connection established successfully

3. Run angular application development server from the Integrated Terminal
   of your preferred IDE:

cd LOCATION_WHERE_CLONED/passport-registry/ng6front
npm install
ng serve -o

=> 'Passport Registry' SPA is opened in your default browser.

# Functional Description

Currently the application covers three pages (components):
'Applicants List' ('list')
'Create a New Applicant' ('create') and
'Applicant Details' ('edit')

# List

The 'Applicants List' page is used as the application's Home page.
There you can:
View the list of registered Applicants in the form of a jQuery DataTable with Searching, Ordering and Paging;
Create a new Applicant by clicking the 'Create New Applicant' button or
View and Edit the Applicant Details by selecting and pressing “Enter” in the corresponding row.

Clicking on the 'Create New Applicant' button will redirect you to the 'create' page -
'Create a New Appliacnt' Form will be opened.

Clicking on the table row will redirect you to the 'edit' page -
'Applicant Details' Form will be opened.

# Create

'Create a New Appliacnt' Form is opened:

The 'SSN' field is mandatory and marked as a 'Required field'.

The 'Save' button will be disabled until you fill in the 'SSN' field.

Clicking on the 'Cancel' button will redirect you to the 'listl page.

Clicking on the 'Save' button will redirect you to the 'list' page, where you will find a new row added to the table, consisting of new Applicant data.

The new created Applicant data will be stored as a new Document in the 'applicants' Collection of the 'applicants' Database.

# Edit

'Appliacnt Details' Form is opened:

The 'SSN' field is mandatory and marked as a 'Required field'.

The 'Save' button will be disabled until you fill in the 'SSN' field.

Clicking on the 'Cancel' button will redirect you to the 'list' page.

Clicking on the 'Save' button will redirect you to the 'list' page, the Applicant data must be updated both in the list and in the database.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Ng6front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

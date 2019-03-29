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

# Functional Description

'Passport Registry' SPA is opened in your default browser.

Currently it is redirected to the 'Applicants List' page where you can see the list of registered applicants as a JQuery DataTable or Create a New Applicant by clicking a button of the same name.

It's worth to prepare several records in database manually, since currently the recording to DB is stubbed.

After clicking on 'Create New Applicant' button, the 'Create a New Appliacnt' Form is opened.
The 'SSN' field is mandatory and noted as a 'Required field'.
The 'Save' button is disabled until you fill 'SSN' field.
'Cancel' button returns to the 'List' page.
'Save' button shows an entered data in a message box.

Clicking on the table row redirects to the 'Edit' page.
It is in progress, we just can see the extracted data in console log via Developer Tool (click F12 on browser to open it)

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

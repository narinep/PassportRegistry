# Basic information about the project:

'backend' project is used to develop a Resource Server to provide a RESTful CRUD APIs.
For bootstrapping the project were used WEB, JPA and posgresql dependencies.

# Prerequisites:

You have to set up the PostgreSQL environment to use as data source.
Start the PostgreSQL server and create a 'testdb' database as mentioned in the
data source configuration in 'application.properties' file.

# Workflow

1.  Run PostgreSQL server from the Terminal:

    pg_ctl -D "C:\PostgreSQL\data\pg96" start

2.  Run spring-boot server from the Terminal or in your preferred IDE:

cd LOCATION_WHERE_CLONED/passport-registry/backend
mvn spring-boot:run

=> Tomcat started on port(s): 8080 ...

3. Run angular application development server from the Integrated Terminal
   of your preferred IDE:

cd LOCATION_WHERE_CLONED/passport-registry/ng6front
npm install // first time only
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

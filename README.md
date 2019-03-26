# Labs11 Non Profit Student Data

Many non-profits work to solve primary and secondary school educational challenges in remote and low resource environments.  This app provides a way for school administrators, board members and social workers to communicate and keep track of student data. Student data may include name, grade level, a place to upload an optional picture, background story, status at the school (student, past student, or visitor), age, insurance card (Y/N) and expiration date, birth certificate, special needs, child’s representative and contact info. It also allows administrators to add new categories to track.  There is also an option to sponsor a child with unpaid school dues. 

-----
## Hosting
http://18.220.56.197:9000

-----
## Endpoints

|Feature Name|User access|Endpoint|
|------------|-----------|--------|
|Create A School|Admin|`POST - /api/schools`|
|Create a Student|Admin|`POST - /api/students`|
|Create a custom feature for a student|Admin|`POST - /api/schools/:id/students`|
|Create A Grade|Admin|`POST - api/schools/:id/grades`|
|Create a Social Worker Visit|Social worker|`POST - api/schools/:id/visits`|
|Sponsor a Student|Sponsor|`TBD`|
|get grade list|all registered users|`GET - api/schools/:id/grades`|
|get student list|all registered users|`GET - api/school/:id/grade/:id/students`|
|update Grade List|School Admins|`PUT - api/school/:id/grades`|
|delete a grade|School Admins|`PUT - api/school/:id/grade/:id`|

All required fields for these endpoints can be found in the Schema section below.

-----
## Environment

Create a file called `.env` in your root directory and populate it with the keys below.

Contact `brackkevin@gmail.com` for database access

Sign up for a set of Google credentials at http://console.developers.google.com

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SESSION_KEY=

DB_ENV=production or development

MYSQL_HOST=sdstaging3.ctuitjdn8sof.us-east-2.rds.amazonaws.com
MYSQL_USER=
MYSQL_PASS=
MYSQL_DB=studentdata
```

-----
## Database Schema

School
* SchoolID
* Name
* Location
	
Social Worker Visits
* VisitID
* SchoolID
* WorkerID
* Date
* Notes

Grade Level
* ClassID
* SchoolID
* Grade Level

Student
* StudentID
* ClassID
* Name
* Age
* PhotoURL
* School
* Status at the School - (current, former, visitor)
* Insurance Status - (Y/N) 
* If (Y) include expiration date
		Insurance Expiration
* Birth Certificate -(Y/N)
* Dues
* Special Needs
* ContactName
* ContactNumber	

Donations
* DonationID
* FK SponsorID
* FK StudentID
* Total
* Date
	

USER
* UserID
* UserName
* FirstName
* LastName
* Email
* PhoneNumber
* UserClass


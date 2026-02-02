Major Project (Wanderlust)
This is a full-stack web application designed for listing and reviewing accommodations, similar to Airbnb. It allows users to view, create, edit, and delete listings for various properties, as well as add reviews.

Features
Listings Management: View a comprehensive list of properties, see detailed information for each, and perform CRUD (Create, Read, Update, Delete) operations on listings.

Review System: Users can leave reviews and ratings for different listings.

Database Seeding: Includes built-in scripts to quickly populate the database with sample listing data for development and testing.

Input Validation: Uses Joi for schema-based validation to ensure data integrity for listings and reviews.

Error Handling: Implements a robust custom error handling class and an asynchronous wrapper to manage server-side errors effectively.

Responsive UI: Built with EJS templates, utilizing ejs-mate for layouts and Bootstrap-ready structures.

Technologies Used
Backend: Node.js, Express

Database: MongoDB via Mongoose ODM

Frontend Templating: EJS with ejs-mate

Validation: Joi

Middleware: method-override (for PUT/DELETE requests), body-parser

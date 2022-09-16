# Cloth-Management-API
<h3>This is a Cloth-Management API that provides user to manage there clothes with Security of JWT.</h3>

Some of its features include:</br>
1. Users can create their account. Once signed in, you can login and logout from your account when your work is accomplished.
2. Users can create their own cloths collection by creating a cloth and adding its description and price . This will link their cloth to their respective account.
3. Thus user can keep track of all cloths he/she owns.
4. To provide security to user , their passwords have been hashed and salted. Further authentication is provided by JWT.
5. Users can also update their account details and also change the description related to clothes.

<h3>Approach</h3>

Step 1: Created mongoose model Schema for **User** and for **Cloth**. Did data validation and sanitization on differernt attributes in the Schema object.<br>
Step 2: Connected the MongoDB database to the API.
Step 3: Created **resource creation endpoints**  by making post routes for user and cloth.<br>
Step 4: Created **resource reading endpoints** by making get routes for user and cloth.<br>
Step 5: Created **resource updating  endpoints** by making patch routes for user and cloth<br>
Step 6: Created **Resource Deleting Endpoints** by making delete routes for user and cloth. And then separated user and cloth routes into two different files.<br>
Step 7: Done hashing and salting on the password required by the user before storing it to the database.<br>
Step 8: Created login Routes for the user and authenticated them by generating tokens using JWT.<br>
Step 9: Whenever a user create a cloth item then the cloth is linked to the owner using its user id.<br>
Step 10: Each cloth thus created also has an authentication token to ensure that only the user can access the clothes under his account.<br>
Step 11 : Created a log out route.<br>
Step 12: Created a delete route in case user wants to delete there account. This will wipe all their data from the database including all the cloths data he/she feeded in the System.<br>

.



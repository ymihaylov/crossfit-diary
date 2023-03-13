# Using express.js and TypeScript
- https://www.webmound.com/best-typescript-setup-with-nodejs-express-project/
- https://blog.logrocket.com/how-to-set-up-node-typescript-express/
- https://github.com/DefinitelyTyped/DefinitelyTyped

# Docker, node.js, express.js
- https://www.youtube.com/watch?v=gAkwW2tuIqE&t=10s
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# Debugging node.js in docker container
- https://stackoverflow.com/questions/47800466/nodemon-inspect-debug-not-working

# PostgreSQL
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

# MongoDB
mongosh -u root -p password
show dbs
use crossfit_diary
show collections
db.dropDatabase();
cls
db - access current db
db.workouts.insertOne({name: "Sunday 12.03.2023", raw_text: "something something", date: "2023-03-12"});
db.workouts.find();
db.users.insertMany([]);
db.users.find().limit(2)
db.users.find().sort({name: 1,})
db.users.find().skip(2)
db.users.find({name: "Kyle"});
db.workouts.find({}, {name: 1});
db.workouts.find({}, {name: 0});
db.users.find({ name: { $eq: "Sally" }});
db.users.find({ age: { $gt: 13 }});
db.users.find({ age: { $gte: 13 }});
db.users.find({ age: { $lte: 13 }});
db.users.find({ name: { $in: ["Kyle", "Sally"] }});
db.users.find({ name: { $nin: ["Kyle", "Sally"] }});
db.users.find({ age: { $exists: true }});
db.users.find({ age: { $gte: 20, $lte: 40 } }); - its an AND
db.users.find($and: [{ age: 26 }, { name: "Kyle" }]);
db.users.find($or: [{ age: {$lte: 26} }, { name: "Kyle" }]);
db.users.find({ age: { $not: { $lte: 20 } } }); - will return everything which the age is empty

db.users.insertMany([{ name: "Tom", balance: 100, debt: 200 }, { name: "Kristin", balance: 20, debt: 0 }])
db.users.find({ $expr: { $gt: ["$debt", "$balance"]} }) - first column is greater than the second column
db.users.find({ "address.street": "Patriarh Evtimii" }) - nested object
db.users.findOne({ age: { $lte: 40 } })

db.users.updateOne({ age: 26 }, { $set: { age: 27 } });

db.users.updateOne({ _id: ОbjectId("6112809d7ec144c25156c4dd")}, { $set: { name: "New Name" } })
db.users.updateOne({ _id: оbjectId("6112809d7ec144c25156c4dd"), { $rename: { name: "firstName" }})

db.users.updateOne({ _id: оbjectId("6112809d7ec144c25156c4dd"), { $unset: { age: "" }})

db.users.updateOne({ _id: оbjectId("6112809d7ec144c25156c4dd"), { $push: { hobbies: "Swimming" }})
db.users.updateOne({ _id: оbjectId("6112809d7ec144c25156c4dd"), { $pull: { hobbies: "Swimming" }}) // remove element

db.users.replaceOne({ age: 30 }, { name: "John" }); // Finds object with age 30 and replace it with {name: "John"}
db.users.deleteOne({ name: "John" });

db.createUser({
   user: "crossfit_diary_user",
   pwd: "crossfit",
   roles: [ "readWrite", "dbAdmin" ]
});

# Mongoose


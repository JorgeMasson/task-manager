// CRUD create, read, update, delete

import chalk from "chalk";
import mongodb, { ObjectId } from "mongodb";
const MongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log(chalk.red("Unable to connect to database: ", error));
    }
    const db = client.db(databaseName);

    /* db.collection("users").findOne(
      { _id: new ObjectId("6392643bc9b32cfae1207317") },
      (error, user) => {
        if (error) {
          return console.log(
            chalk.red("Unable to connect to database: ", error)
          );
        }

        for (let obj in user) {
          console.log(`${chalk.yellow(obj)}: ${chalk.blue(user[obj])}`);
        }
      }
    );

    db.collection("tasks")
      .find({ completed: true })
      .toArray((error, users) => {
        console.log(users);
      });

    db.collection("tasks").findOne({ description: "Deploy" }, (error, user) => {
      if (error) {
        return console.log(chalk.red("Unable to connect to database: ", error));
      }

      for (let obj in user) {
        console.log(`${chalk.yellow(obj)}: ${chalk.blue(user[obj])}`);
      }
    });

    db.collection("tasks")
      .find({ completed: true })
      .count((error, users) => {
        console.log(users);
      }); */

    /* db.collection("users")
      .updateOne(
        {
          _id: new ObjectId("6392643bc9b32cfae1207317"),
        },
        {
          $inc: {
            age: 5,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); */

    //
    // Use updateMany to complete all tasks

    // 1. Check the documentation for updateMany
    // 2. setup the call with the query and the updates
    // 3. Use promise methods to setup the success / error handlers
    // 4. Test your work

    /* db.collection("users")
      .updateMany(
        {
          age: 27,
        },
        {
          $inc: {
            age: 2,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); */

    // Use find and findOne with tasks
    //
    // 1. Use findONe to fetch thar last task by its (print doc to console)
    // 2. Use find to fetch all tasks that are not completed (print docs to console)
    // 3. Test your work

    /* db.collection("users").insertOne(
      {
        name: "Vikram",
        age: 26,
      },
      (error, result) => {
        if (error) {
          return console.log(chalk.red("Unable to insert user", error));
        }

        console.log(chalk.green(result.insertedId));
      }
    ); */

    /* db.collection("tasks").insertMany(
      [
        {
          description: "Develop",
          completed: true,
        },
        {
          description: "Test",
          completed: true,
        },
        {
          description: "Deploy",
          completed: false,
        },
        {
          description: "Programación orientada a memes",
          completed: false,
        },
        {
          description: "Authomatization",
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log(chalk.red("Unable to insert user", error));
        }
        for (let obj in result.insertedIds) {
          console.log(chalk.green(result.insertedIds[obj]));
        }
      }
    ); */

    /* db.collection("users")
      .deleteMany({
        age: 56,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); */

    //
    // Use deleteOne to remove a Task
    // 1. Grab the description for the task you want to remove
    // 2. Setup the call with the query
    // 3. Use promise methods to setup the success/error handlers
    // 4. Test your work

    /* db.collection("tasks")
      .deleteOne({
        description: "Authomatization",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); */
  }
);

// Insert 3 tasks into a new tasks collection
//
// 1. Use insertMany to insert the documents
// 2. Setup the callback to handle error on pint ops
// 3. Run the script
// 4. Refresh the database in Robo 3T and view data in tasks collection

/* const dbName = "exercise";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log(chalk.red("Unable to connect to database: ", error));
    }

    const db = client.db(dbName);

    db.collection("table").insertMany(
      [
        {
          location: "Obregon",
          school: "ITSON",
        },
        {
          location: "Hermosillo",
          school: "Regis",
        },
        {
          location: "Navojoa",
          school: "Escuela de la vida",
        },
      ],
      (error, result) => {
        if (error) {
          return console.log(chalk.red("Unable to insert tasks: ", error));
        }

        for(let obj in result.insertedIds) {
            console.log(chalk.green(result.insertedIds[obj]))
        }
      }
    );
  }
); */

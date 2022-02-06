const request = require("supertest");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");

const app = require("../app");
// const Item = require("../Item");

// const itemOne = { name: "Rice" };
// const itemTwo = { name: "Candy" };

// beforeEach(async () => {
//     await Item.deleteMany();
//     await new Item(itemOne).save();
//     await new Item(itemTwo).save();
// });

// afterAll((done) => {
//     // Closing the DB connection allows Jest to exit successfully.

//     mongoose.connection.close();
//     done();
// });

// test("Should get all items from the database", async () => {
//     let response = await request(app).get("/api/items");
//     // response = await JSON.stringify(response);
//     // response = await JSON.parse(response);
//     console.log(response.body);
//     expect(response.status).toBe(200);
//     expect(response.body.length).toBe(2);
// });

test("Should load the main page", async () => {
    let response = await request(app).get("/");
    response = JSON.stringify(response);
    response = JSON.parse(response);
    expect(response.status).toBe(200);
});
test("Should load the main page", async () => {
    let response = await request(app).get("/");
    expect(response.status).toBe(200);
});

// test("Should get the data object", async () => {
//     let response = await request(app).get("/api");
//     expect(response.status).toBe(404);
// });

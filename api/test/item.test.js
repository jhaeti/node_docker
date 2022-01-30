const request = require("supertest");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");

const app = require("../app");
// const Item = require("./Item");

// const itemOne = { name: "Rice", owner: userOneId };
// const itemTwo = { name: "Candy", owner: userOneId };

// beforeEach(async () => {
// await Item.deleteMany();
// await new User(userOne).save();
// await new Item(itemOne).save();
// await new Item(itemTwo).save();
// });

// test("Not logged in users should not be able to access items", async () => {
//     let response = await request(app).get("/api/items");
//     response = JSON.stringify(response);
//     response = JSON.parse(response);
//     expect(response.status).toBe(401);
// });

test("Should load the main page", async () => {
    let response = await request(app).get("/");
    response = JSON.stringify(response);
    response = JSON.parse(response);
    expect(response.status).toBe(200);
});

test("Should get the data object", async () => {
    let response = await request(app).get("/api");
    expect(response.body).toEqual({ _id: "123", name: "name" });
});

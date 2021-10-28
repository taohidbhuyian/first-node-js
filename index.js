const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 0, name: "taohid", email: "taohid@gmail.com" },
  { id: 1, name: "nurul", email: "nurul@gmail.com" },
  { id: 2, name: "amin", email: "amin@gmail.com" },
  { id: 3, name: "alhan", email: "alhan@gmail.com" },
  { id: 4, name: "bhuyian", email: "bhuyian@gmail.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser)
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("Listing to port", port);
});

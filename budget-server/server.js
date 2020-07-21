const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
var bodyParser = require("body-parser");
const jwtGenerator = require("./utils/jwtGenerator");
const bcrypt = require("bcrypt");
const authorization = require("./middleware/authorization");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

// app.use(express.static("budget-client/build"));
if (ENV === "production") {
  app.use(express.static(path.join(__dirname, "../budget-client/build")));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../budget-client/build/index.html"));
  });
}

app.post("/user/register", async (req, res) => {
  try {
    const { login, email, password } = req.body;
    const allUsers = await pool.query("SELECT login, email FROM logintable");
    const user = allUsers.rows.filter(
      (el) => el.login === login || el.email === email
    );
    if (user.length > 0) {
      res.json("User already exist!");
    } else {
      let hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await pool.query(
        "INSERT INTO logintable (login, email, password) VALUES($1, $2, $3) RETURNING *",
        [login, email, hashedPassword]
      );
      res.send(newUser.rows);
      res.redirect("/user/login");
      const token = jwtGenerator(newUser.rows[0].id);
      console.log(res.json({ token }));
      return res.json({ token });
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM logintable WHERE email=$1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.json("Password or email is incorrect");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    console.log(validPassword);
    if (!validPassword) {
      return res.json("password or Email is incorrect");
    }
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
  }
});
app.post("/user/dashboard", authorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT login FROM logintable WHERE id = $1",
      [req.user.id]
    );
    console.log(res);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server Error");
  }
});
app.post("/authentication/verify", authorization, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

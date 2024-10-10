const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const db = require('./models');
const Role = db.role;
const dbConfig = require('./config/db.config');
const Visitor = require('./models/Visitor');

const app = express();

app.use(cookieParser());
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}));

let visitorCount = 0;

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});

mongoose.connect(`mongodb+srv://hamodyadl52:mhmd@cluster0.bj4sx.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connect to MongoDB");
  initial();
}).catch(err => {
  console.error("Connection error", err);
  process.exit();
});

app.post('/incrementCount', async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = new Visitor({ count: 1 });
    } else {
      visitor.count++;
    }
    await visitor.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to increment visitor count' });
  }
});

app.get('/visitorCount', async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      res.json({ count: 0 });
    } else {
      res.json({ count: visitor.count });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve visitor count' });
  }
});

app.get("/", (req, res) => {
  let visitorCountSession = req.session.visitorCount || 0;
  visitorCountSession++;
  req.session.visitorCount = visitorCountSession;
  res.send(`عدد الزيارات: ${visitorCountSession}`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({ name: "user" }).save(err => {
        if (err) console.log("error", err);
        console.log("added 'user' to roles collection");
      });

      new Role({ name: "moderator" }).save(err => {
        if (err) console.log("error", err);
        console.log("added 'moderator' to roles collection");
      });

      new Role({ name: "admin" }).save(err => {
        if (err) console.log("error", err);
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html')) ;
}

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

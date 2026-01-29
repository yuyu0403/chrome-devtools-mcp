const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FIXED_USER = {
  account: "admin",
  password: "admin"
};

app.post("/login", (req, res) => {
  const { account, password } = req.body;

  if (!account || !password) {
    return res.status(422).json({ error: "帳號或密碼不可為空" });
  }

  if (account === FIXED_USER.account && password === FIXED_USER.password) {
    return res.status(200).json({ success: true, message: "登入成功" });
  } else {
    return res.status(401).json({ success: false, message: "帳號或密碼錯誤" });
  }
});

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});

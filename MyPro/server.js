const mongoose = require("mongoose");
//创建连接
mongoose.connect(
  "mongodb://localhost:27017/test",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("数据库连接成功");
  }
);
//创建约束对象
const rolesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  reward: Number,
  desc: [String],
});
const friendsSchema = new mongoose.Schema({
  name: String,
  info: {
    ref: "roles",
    type: mongoose.Schema.Types.ObjectId,
  },
});
//创建模型
const rolesModel = mongoose.model("roles", rolesSchema);
const friendsModel = mongoose.model("friends", friendsSchema);
//添加数据
// rolesModel
//   .create([
//     {
//       name: "蒙奇D·路飞",
//       reward: 130000,
//       desc: ["草帽大船团船长", "橡胶果实能力者"],
//     },
//     {
//       name: "罗罗诺亚·索隆",
//       reward: 100000,
//       desc: ["路痴", "三刀流剑士"],
//     },
//   ])
//   .then((msg) => {
//     console.log(msg);
//   });

//修改数据
// rolesModel
//   .update(
//     { name: "娜美" },
//     { $set: { name: "娜美", reward: 80000, desc: ["航海士", "橘子"] } },
//     { upsert: true }
//   )
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// friendsModel
//   .create({
//     name: "罗罗诺亚·索隆",
//     info: "5f9fe6e52190b04d2ca154cc",
//   })
//   .then((msg) => {
//     console.log(msg);
//   });

friendsModel
  .find()
  .populate("info")
  .then((msg) => {
    console.log(msg);
  });

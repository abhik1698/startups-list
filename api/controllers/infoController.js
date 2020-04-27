const Info = require("../models/infoSchema");

const addStartup = (data, callback) => {
  Info.create(data, (err, info) => {
    if (err) {
      console.log("error saving info");
      return callback(err, 500, null);
    } else {
      return callback(null, 200, info);
    }
  });
};

const getData = (callback) => {
  Info.find()
    .then((res) => callback(res))
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

module.exports = {
  addStartup,
  getData,
};

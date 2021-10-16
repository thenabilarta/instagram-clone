const connection = require("./connection");

const orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM schedule", function (err, data) {
      if (err) cb(err, null);
      cb(null, data);
    });
  },
  getAllDay: function (date, cb) {
    connection.query(
      `SELECT * FROM schedule WHERE date = "${date}" `,
      function (err, data) {
        if (err) cb(err, null);
        cb(null, data);
      }
    );
  },
  insertOne: function (title, email, phone, date, start, end, cid, status) {
    const sqlQuery = `INSERT INTO schedule (id, title, email, phone, date, start, end, cid, status) VALUES ('', '${title}', '${email}', '${phone}', '${date}', '${start}', '${end}', '${cid}', '${status}')`;
    connection.query(sqlQuery);
  },
  updateOne: function (id, title, email, phone, date, start, end, cid, status) {
    const sqlQuery = `UPDATE schedule SET title = "${title}", email = "${email}", phone = "${phone}", date = "${date}", start = "${start}", end = "${end}", cid = "${cid}", status = "${status}" WHERE id = "${id}"`;
    connection.query(sqlQuery);
  },
  deleteOne: function (id) {
    const sqlQuery = `DELETE FROM schedule WHERE id = "${id}"`;
    connection.query(sqlQuery);
  },
  selectAllEnergy: function (cb) {
    connection.query("SELECT * FROM energy", function (err, data) {
      if (err) cb(err, null);
      cb(null, data);
    });
  },
  selectOneEnergy: function (date, cb) {
    connection.query(
      `SELECT * FROM energy WHERE date = '${date}'`,
      function (err, data) {
        if (err) cb(err, null);
        cb(null, data);
      }
    );
  },
  checkOneEnergy: function (date, cb) {
    connection.query(
      `SELECT * FROM energy WHERE date = '${date}'`,
      function (err, data) {
        if (err) cb(err, null);
        cb(null, data);
      }
    );
  },
  insertOneEnergy: function (
    date,
    energyOnBillLastYear,
    energyOnBillThisYear,
    energyOnDevice,
    monthlyPercentage,
    monthlySaving
  ) {
    const sqlQuery = `INSERT INTO energy (date, energyOnBillLastYear, energyOnBillThisYear, energyOnDevice, monthlyPercentage, monthlySaving) VALUES ('${date}', '${energyOnBillLastYear}', '${energyOnBillThisYear}', '${energyOnDevice}', '${monthlyPercentage}', '${monthlySaving}')`;
    connection.query(sqlQuery);
  },
  updateOneEnergy: function (
    date,
    energyOnBillThisYear,
    energyOnBillLastYear,
    monthlyPercentage,
    monthlySaving
  ) {
    const sqlQuery = `UPDATE energy SET energyOnBillThisYear = "${energyOnBillThisYear}", energyOnBillLastYear = "${energyOnBillLastYear}", monthlyPercentage = "${monthlyPercentage}", monthlySaving = "${monthlySaving}" WHERE date = "${date}"`;
    connection.query(sqlQuery);
  },
  updateOneEnergyDevice: function (date, energyOnDevice, lastYearEnergy) {
    const sqlQuery = `UPDATE energy SET energyOnDevice = "${energyOnDevice}", energyOnBillLastYear = "${lastYearEnergy}" WHERE date = "${date}"`;
    connection.query(sqlQuery);
  },
  updateOneEnergyLastYear: function (date, energyOnBill) {
    const sqlQuery = `UPDATE energy SET energyOnBill = "${energyOnBill}" WHERE date = "${date}"`;
    connection.query(sqlQuery);
  },
  deleteOneEnergy: function (id) {
    const sqlQuery = `DELETE FROM schedule WHERE id = "${id}"`;
    connection.query(sqlQuery);
  },
  selectAllPowerMeter: function (cb) {
    connection.query("SELECT * FROM powermeter", function (err, data) {
      if (err) cb(err, null);
      cb(null, data);
    });
  },
  insertOnePower: function (total_w, create_datetime) {
    const sqlQuery = `INSERT INTO powermeter (id, total_w, create_datetime) VALUES ('', '${total_w}', '${create_datetime}')`;
    connection.query(sqlQuery);
  },
  getLastMonthPower: function (date, cb) {
    connection.query(
      `SELECT * FROM powermeter WHERE create_datetime LIKE "${date}%" `,
      function (err, data) {
        if (err) cb(err, null);
        cb(null, data);
      }
    );
  },
};

module.exports = orm;

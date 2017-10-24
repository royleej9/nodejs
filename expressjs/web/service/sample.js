var dateFormat = require('dateformat');
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
const dbPath = path.resolve(__dirname, 'todo.db')


function connectDb() {
    let db = new sqlite3.Database('./data.db:', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the SQlite database.');
    });
    return db;
}

function closeDb(db) {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

function setupSampleDatas() {
    console.log('create data');
    initTables().then(function (res) {
        let db = connectDb();

        setInterval(function indata() {
            insertDatas(db);
        }, 1000);

    }).catch(function (err) {

    });
}

function getData() {
    let db = connectDb();
    return new Promise(function (resolve, reject) {
        db.all('SELECT * FROM chart_tb order by full_ms desc limit 20', function (err, rows) {
            console.log(rows);

            resolve(rows);
        });
    });

    // setInterval(function indata(){
    //     selectDatas(db);
    // }, 1500);    
}


///////////////////////////////////////////////

function initTables() {
    return new Promise(function (resolve, reject) {
        let db = connectDb();
        db.all('select name from sqlite_master where type="table" and name="chart_tb"', function (err, rows) {
            if (rows.length === 0) {
                console.log('create table');
                db.run('create table chart_tb (in_date TEXT, full_ms, val Integer)');
            } else {
                console.log('table is existed');
            }

            db.close((err) => {
                if (err) {
                    console.error(err.message);
                }
                console.log('Close the database connection.');
                resolve();
            });
        });
    });
}

function insertDatas(db) {
    // console.log('insert Data');
    var now = new Date();
    var date = dateFormat(now, "yyyy-mm-dd-h:MM:ss");
    var fullMs = new Date();
    var val = Math.floor((Math.random() * 100) + 1);
    db.run('INSERT INTO chart_tb VALUES (?, ?, ?)', [date, fullMs, val]);
}

// function selectDatas(db) {
//     db.all('SELECT * FROM chart_tb', function(err, row) {
//         //  console.log(row);
//     });
// }

module.exports.setupSampleDatas = setupSampleDatas;
module.exports.getData = getData;
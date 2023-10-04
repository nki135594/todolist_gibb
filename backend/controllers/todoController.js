const db = require("../db/database");

//CREATE DB
exports.createDB = (req, res) => {
    let q = `create Database todolist`;
    db.query(q, (err, result) => {
        if (err) throw err;
            return res.status(201).json("DB created");
        })
}

//CREATE TABLE
exports.createTable = (req, res) => {
    let q = `CREATE TABLE todos (id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), PRIMARY KEY (id))`;
    db.query(q, (err, result) => {
        if (err) throw err;
            return res.status(201).json("Table created");
        })
}

//CREATE LIST
exports.createList = (req, res) => {
    const q = `INSERT INTO todos SET ?`;

    const { firstName, lastName } = req.body;

    db.query(q, { firstName, lastName }, (err, result) => {
        if (err) return res.json(err);
            return res.status(200).json(result);
        });
}

//SHOW TODOS
exports.showTodos = (req, res) => {
    const q = `SELECT * FROM todos`;
    db.query(q, (err, result) => {
        if (err) return res.json(err);
            return res.status(200).json(result);
        });
};

//SHOW TODOS BY ID
exports.singleTodo = (req, res) => {
    const q = `SELECT * FROM todos WHERE id =${req.params.id}`;
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result[0]);
    });
};

//UPDATE TODOS
exports.updateTodo = (req, res) => {
    const { firstName, lastName } = req.body;

    const q = `UPDATE todos SET ? where id =${req.params.id}`;
    db.query(q, { firstName, lastName }, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    })
}

//DELETE TODOS BY ID
exports.deleteTodoByid = (req, res) => {

    const q = `DELETE FROM todos WHERE id = ${req.params.id}`;
    
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json({ data: "todo deleted" });
    })
}


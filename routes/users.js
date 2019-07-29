const express = require('express');
const router = express.Router();

const db = require('../config/database')

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    const sql = `SET @email = ?; CALL getUserByEmail(@email);`;
    db.query(sql, [email, password], (err, rows, fields) => {

        if(!err){
            res.send(rows[1]);

        }else{
            console.log(err);
        }
    })

});

module.exports = router;
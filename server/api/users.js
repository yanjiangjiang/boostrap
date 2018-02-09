var express = require('express');
var router = express.Router();
var connection = require('../bd/configMsql.js')

/* GET home page. */
router.get('/getUser', function(req, res, next) {
    let sql = 'select * from list'
    connection.query(sql, [
        req.body.phone,
        req.body.password
    ], (err, result) => {
        console.log(result)
        if (result) {
            res.json({
                code: 1,
                msg: result
            })
        }
    })
});





module.exports = router;
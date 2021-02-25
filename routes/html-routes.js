const work = require('../models/work.js')

module.exports = (app) => {

    app.get('/', (req, res) => {
        const hbsObject = {
            projects: work
        }
        res.render('index', hbsObject)
        // console.log('index page')
    });
    app.get('/work', (req, res) => {
        const hbsObject = {
            projects: work
        }
        res.render('work', hbsObject)
        // console.log('index page')
    });

    app.get('/work/:id', (req, res) => {

        const result = work.filter((proj) => proj.id == req.params.id);

        const hbsObject = {
            project: result
        }
        res.render('project', hbsObject)
        // console.log('result: ', result)
        // console.log('hbsObjest: ', hbsObject)
    });

    app.get('/about', (req, res) => {
        res.render('about')
        // console.log('about page')
    });


}
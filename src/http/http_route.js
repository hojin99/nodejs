
exports.register = (app) => {
    
    app.get('', (req,res) => {
        res.send('Hello World!!!');
    });

    app.get('/hi', (req,res) => {
        res.send('hi boy!!!');
    });

}
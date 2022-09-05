

exports.register = (app) => {
    
    app.get('', (req,res) => {
        res.send('Hello World!!!');
    });

}
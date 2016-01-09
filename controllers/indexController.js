exports.serveIndex = function(req, res, next) {
  //render view
  res.render('index', { title: 'File Metadata Microservice' });
};

exports.uploadFile = function(req,res, next){
    // send file size.
	res.send({size:  req.file.size});
}
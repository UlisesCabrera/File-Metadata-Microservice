exports.serveIndex = function(req, res, next) {
  //render view
  res.render('index', { title: 'File Metadata Microservice', fileSize: '' });
};

exports.uploadFile = function(req,res, next){
    
    // send file size.
	res.render('index', { title: 'File Metadata Microservice', fileSize: req.file.size + ' bytes' });
}
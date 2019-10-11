/**
  @param {file} dragedFile - file to validate
  @returns {String} array of objects
*/
const validateFile = (dragedFile) => {
  return new Promise((resolve, reject) => {
    let fileType = dragedFile.type,
        fileSize = dragedFile.size,
        fileName = dragedFile.name

    //not right file type
    if (!['image/jpeg', 'image/png'].includes(fileType)) {
      reject('File schould be .jpg or .png')
    }

    //file to large
    if (fileSize/1000000 > 5) {
      reject("File cannot be larger than 5mb")
    }


    //check dimensions
    let reader = new FileReader();
    reader.onload = (function(theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function() {
            // access image size here
            if (this.height > 1080 || this.width > 1920) {
              reject("File dimensions may not be larger than 1080p")
            }else {
              //all good
              resolve({'name': fileName, 'src': image.src})
            }
        };
    });
    reader.readAsDataURL(dragedFile)
  })
}


export default validateFile

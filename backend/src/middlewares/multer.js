const path = require('path')
const multer = require('multer')

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/uploads')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  }
})

const upload = multer({ storage: diskStorage })
module.exports = upload
const express = require("express");
const Book = require("../Model/bookSchema");
const router = express.Router();
const multer = require("multer");
const path = require("path"); // for handling file paths

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Absolute path to the destination folder
    cb(null, path.join(__dirname, "../client/src/uploads"));
  },
  filename: function (req, file, cb) {
    // Generate a unique filename with a timestamp
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix + ".jpg");
  },
});

const upload = multer({ storage: storage });

// post request for register
router.post("/", upload.single("file_name"), async (req, res, next) => {
  // Access the uploaded file information using req.file
  console.log(req.file);

  // Use req.file.filename to store the filename in the database
  req.body.bookImage = req.file.filename;

  try {
    const selectedBook = await Book.create(req.body);
    console.log(selectedBook);
    if (selectedBook) {
      res.json({
        message: "Book Added Successfully!",
        detail: selectedBook,
      });
    }
  } catch (error) {
    res.json({
      errorMsg: "Oops! Something Went wrong!",
      errDetail: error,
    });
  }
});

// view books
router.get("/", async (req, res) => {
  try {
    const bookList = await Book.find();
    if (bookList) {
      res.json({
        message: "Successfully Fetched!",
        bookList: bookList,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      errorMsg: "Oops! Something Went wrong!",
      errDetail: error,
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = await Book.deleteOne({ _id: req.params.id });
    if (data) {
      res.json({
        message: "Deleted Successfully!",
        detail: data,
      });
    }
  } catch (error) {
    res.json({
      errorMsg: "Oops! Something Went Wrong",
      errDetail: error,
    });
  }
});

module.exports = router;

// const express = require("express");
// const Book = require("../Model/bookSchema");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path"); // for handling file paths

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Absolute path to the destination folder
//     cb(null, path.join(__dirname, "../client/src/uploads"));
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique filename with a timestamp
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.originalname + "-" + uniqueSuffix + ".jpg");
//   },
// });

// const upload = multer({ storage: storage });

// // post request for register
// router.post("/", upload.single("file_name"), async (req, res, next) => {
//   // Access the uploaded file information using req.file
//   console.log(req.file);

//   // Use req.file.filename to store the filename in the database
//   req.body.bookImage = req.file.filename;

//   try {
//     const selectedBook = await Book.create(req.body);
//     console.log(selectedBook);
//     if (selectedBook) {
//       res.json({
//         message: "Book Added Successfully!",
//         detail: selectedBook,
//       });
//     }
//   } catch (error) {
//     res.json({
//       errorMsg: "Oops! Something Went wrong!",
//       errDetail: error,
//     });
//   }
// });

// // view books
// router.get("/", async (req, res) => {
//   try {
//     const bookList = await Book.find();
//     if (bookList) {
//       res.json({
//         message: "Successfully Fetched!",
//         bookList: bookList,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({
//       errorMsg: "Oops! Something Went wrong!",
//       errDetail: error,
//     });
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     const data = await Book.deleteOne({ _id: req.params.id });
//     if (data) {
//       res.json({
//         message: "Deleted Successfully!",
//         detail: data,
//       });
//     }
//   } catch (error) {
//     res.json({
//       errorMsg: "Oops! Something Went Wrong",
//       errDetail: error,
//     });
//   }
// });

// module.exports = router;

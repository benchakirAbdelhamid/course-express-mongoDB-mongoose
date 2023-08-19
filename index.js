// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// require("dotenv").config();
// // // ===> first methode connect database
// const port = process.env.PORT || 3000;
// mongoose
//   .connect(process.env.DATABASE, { dbName: "newDB" })
//   .then(async () => {
//     console.log("Well connected to DB");
//     app.listen(port);
//   })
//   .catch((err) => console.log(err));

// // ===> second methode connect database
// mongoose
//   .connect(process.env.DATABASE)
//   .then(() => {
//     console.log("Database connected...");
//   })
//   .catch((err) => {
//     console.error("db could not connect...");
//   });

// Schema hia structure dial collection li ghadi tkon fi database
// const courseShema = new mongoose.Schema({
//   name: String,
//   author: String,
//   tags: [String],
//   date: { type: Date, default: Date.now },
//   // date : Date
//   isPublished: Boolean,
// });

// // create model li mbasi 3la mongoose wa shema li sawabna
// const Course = mongoose.model("Course", courseShema);
// object camelCase li min model Course
// const course = new Course({
//   name: "Node JS for beginners",
//   author: "hamid benchakir",
//   tags: ["nodeJs", "react", "backend"],
//   isPublished: true,
// });

// save value and create collection and create database mli matkonch deja kayna
// course.save();

// second methode with async and await becouse return value save database
// async function createCourse(){
//   const course = new Course({
//     name: "2 express JS for beginners",
//     author: "2 hamid benchakir",
//     tags: ['2',"nodeJs", "react", "backend"],
//     isPublished: false,
//   });
//   const result = await course.save();
//   console.log(result)
// }
// createCourse()

// // executer des requetes 3la mongodb with mongoose

// async function getCourses() {
//   // const courses = await Course.find() // find all info object course
//   // const courses = await Course.find({name:'second express JS for beginners'})// find info object name = value course and 1 condition
//   // const courses = await Course.find({name:'Node JS for beginners',isPublished:true})// find object name = value course and 2 condition
//   // const courses = await Course.find({
//   //   name: "Node JS for beginners",
//   //   isPublished: true,
//   // }).select({ name: 1, date: 1, _id: 0 }); // find object name = value course and 2 condition and select specifi value
//   // const courses = await Course.find()
//   //   .select({ name: 1, date: 1, _id: 0 })
//   //   .sort({ name: 1 })
//   // const courses = await Course.find()
//   //   .select({ name: 1, date: 1, _id: 0 })
//   //   .sort({ name: -1 })
//   const courses = await Course.find()
//     .select({ name: 1, date: 1, _id: 0 })
//     .sort({ name: -1 }).limit(1)

//   console.log("====> course : ===> ", courses);
// }
// getCourses();

// // les operateurs de comparaison
// async function getCourses() {
//   // eq (equal)
//   // ne (not equal)
//   // gt (greater htan)
//   // gte (greater htan or equal to)
//   // lt (less than)
//   // lte (less than or equal to)
//   // in
//   // nin (not in)
//   // exemple // Course.find({price : {$gt : 10} }) ==> price<10
//   // exemple // Course.find({price : {$gt : 10 , $lt : 20} }) ==> price<10 and price < 20
//   // exemple // Course.find({price : {$in : [10,20,100]} }) ==> price li 3andhom 10 or 20 or 100
//   const courses = await Course.find()
//     .select({ name: 1, date: 1, _id: 0 })
//     .sort({ name: -1 }).limit(1)

//   console.log("====> course : ===> ", courses);
// }
// getCourses();

// // les operateurs logique
// async function getCourses() {
//   // and || or
//   // exemple // Course.find().and([{name:'Node JS for beginners',isPublished:true}])
//   // const courses = await Course.find().and([{name:'Node JS for beginners'},{isPublished:true}])
//   //   .select({ name: 1, date: 1, _id: 0 })
//   // const courses = await Course.find().or([{name:'hamid'},{isPublished:false}])
//   //   .select({ name: 1, date: 1, _id: 0 })

//   // // equevalent like exemple search
//   // const courses = await Course.find({author : /^second/}) // search second minuscale
//   //   .select({ name: 1,author:1, date: 1, _id: 0 })
//   // const courses = await Course.find({author : /^Second/i}) // search second minuscale or majuscule
//   //   .select({ name: 1,author:1, date: 1, _id: 0 })
//   // const courses = await Course.find({author : /^second/i}) // search second minuscale or majuscule
//   //   .select({ name: 1,author:1, date: 1, _id: 0 })
//   // const courses = await Course.find({author : /^se/i}) // search second minuscale or majuscule
//   //   .select({ name: 1,author:1, date: 1, _id: 0 })

//   const courses = await Course
//     // .find({author : /^Second/i}) // kaybda bi second majuscule or minuscule
//     // .find({author:/benchakir$/}) // kaysali bi banchakir
//     // .find({ author: /Benchakir$/i }) // kaysali bi banchakir majuscule or minuscule
//     // .find({ author: /.*aki.*/i }) // contient aki majuscule or minuscule in author
//     .find({ author: /.*AKI.*/i }) // contient aki majuscule or minuscule in author
//     .select({ name: 1, author: 1, date: 1, _id: 0 })
//     .sort({name:-1})
//     .limit(10)

//   console.log("====> course : ===> ", courses);
// }
// getCourses();

// //   // requet count
// async function getCourses() {
//   const courses = await Course
//     .find({ author: /.*AKI.*/i })
//     .count()
//   console.log("====> course : ===> ", courses);
// }
// getCourses();

// pagination == skip and limit
// async function getCourses() {
//   pageNumber = 1;
//   pageSize = 10;
//   const courses = await Course
//     .find({ author: /.*AKI.*/i })
//     .select({ name: 1, author: 1, date: 1, _id: 0 })
//     .sort({name:-1})
//     .skip((pageNumber - 1) * pageSize)  // pagination
//     .limit(pageSize)
//   console.log("====> course : ===> ", courses);
// }
// getCourses();

// update document in collection
// async function updateCourse(id) {
//   // // recuperer document specifie pour modifie
//   // let course = await Course.findById(id)
//   // course.name = 'salam update name'
//   // course.author = 'update author'
//   // // course.save()
//   // let result = await course.save()
//   // console.log(result)

//   // update direct
//   // Course.updateOne()
//   // let result = await Course.updateOne( // updateOne kadir update li document 1
//   //   { _id: id },
//   //   {
//   //     $set: {
//   //       name: "salam update second222222222222",
//   //       isPublished: false,
//   //     },
//   //   }
//   // );
//   // let result = await Course.findByIdAndUpdate(// updateOne kadir update wa katraja3 akhir values kano 9bal update
//   //   { _id: id }, // condition
//   //   {
//   //     $set: {
//   //       name: "3 3 3 salam update ",
//   //       isPublished: true,
//   //     },
//   //   }
//   // );
//   let result = await Course.findByIdAndUpdate(
//     { _id: id }, // condition
//     {
//       $set: {
//         name: "3 3 3 hhhh update ",
//         isPublished: false,
//       },
//     },{new : true} // 3 parametre bach  katraja3  values jdida li darti liha update
//   );
//   console.log(result);
// }
// updateCourse("64dea451117859a759c1e388");

// // ===== validation fi database =====
// // package join tadir validation fi data li jaya min form
// // walakin daba ndiro validation fi data base
// // validation fi insert wa hta update wa fi kola action

const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
// // ===> first methode connect database
const port = process.env.PORT || 3000;
mongoose
  .connect(process.env.DATABASE, { dbName: "newDB" })
  .then(async () => {
    console.log("Well connected to DB");
    app.listen(port);
  })
  .catch((err) => console.log(err));

const courseSecondShema = new mongoose.Schema({
  // name: { type: String, required: true },
  name: { type: String, required: true, minlength: 5, maxlength: 100 },
  // author: String,
  // author: { type: String, uppercase: true }, // // dakchi li ghadi yadkhol ghadi ykon uppercase
  // author: { type: String, lowercase: true },// // dakchi li ghadi yadkhol ghadi ykon lowercase
  author: { type: String, lowercase: true , trim : true },// // 'trim : true' kayhayad espace fi lawal wa akhir
  // tags: [String],
  tags: {
    type: Array,
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "Course Should have at least one Tag",
    }, // bach ykon length dial array fo9 0 and  wa khas matkonch null 'v &&'
  },
  category: {
    type: String,
    enum: ["Computer", "Dev", "Mobile"], // anum ay khashom ykono wahda min hado li fi array
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  // price : Number
  // price : {type : Number , required : true }
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    }, // ghadi tkon ublicatoire =required mli thon isPublished = true  || return this.isPublished = true
    min: 10,
    max: 120,
    set : v => Math.round(v), // set ay mli dakhal value dak value fi fasila 2.4 => 2 || 5.8 => 6
    get : v => Math.round(v) // ay fi recuperation mli tarja3 lik data min database taba9 3liha dak value fi fasila 2.4 => 2 || 5.8 => 6 
  },
});

// create model li mbasi 3la mongoose wa shema li sawabna
const Course = mongoose.model("CourseSecond", courseSecondShema);

async function createCourse() {
  const course = new Course({
    name: "hamid benchakair",
    author: "      Hamid BENCHAKIR   ",
    // tags: null,
    tags: ['0','1'],
    category: "Dev",
    // // mli tkon isPublished = false fa machi darori tkon price required
    // isPublished: false,
    // // mli tkon isPublished = true fa darori tkon price required wa dkhol kif validation li darna
    isPublished: true,
    price: 80.3,
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    // console.error(error)
    // console.error(error.message) // show message error in tags
    // console.error(error.errors)
    // // show all arror validation database
    // for(field in error.errors){
    //   console.log(error.errors[field].message)
    // }
    // // stock error in object with key in value
    let errors = {};
    for (field in error.errors) {
      errors[field] = error.errors[field].message;
      // key = value
    }
    console.log("===> errors : ==> ", errors);
  }
}
createCourse();

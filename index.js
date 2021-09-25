const fs = require("fs");
const superagent = require("superagent");

// ==================================
// Callback hell
// ==================================
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random dog image saved to file");
//       });
//     });
// });

// ==================================
// Callback to .then .catch promises
// ==================================

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random dog image saved to file");
//       });
//     })
//     .catch((err) => console.log(err.message));
// });

// ==================================
// Promises
// ==================================

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject("Can't read that file");
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject("Could not write file");
//       resolve("success");
//     });
//   });
// };

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro("dog-img.txt", res.body.message);
//   })
//   .then(() => {
//     console.log("Random dog image saved to file");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// ==================================
// Promises with Async Await
// ==================================

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("Can't read that file");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Could not write file");
      resolve("success");
    });
  });
};

// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed: ${data}`);

//     const response = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     await writeFilePro("dog-img.txt", response.body.message);
//     console.log("Random dog image saved to file");
//   } catch (err) {
//     throw new err();
//   }
// };

// console.log("1. Getting the dog pic");
// getDogPic()
//   .then(() => {
//     console.log("Success");
//     console.log("3. Getting the dog pic");
//   })
//   .catch((err) => {
//     console.log("ERROR 💥");
//   });

// ==================================
// Immidiately invoked functions
// ==================================

// (async () => {
//   console.log("Starting searching for image.........");
//   const dogPic = await getDogPic();
//   console.log("Ending of the image.........");
// })();

// =============================================
// Async Await Multiple Promises Simultaniously
// =============================================

// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed: ${data}`);

//     const response1 = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );

//     const response2 = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );

//     const response3 = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );

//     const response4 = superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );

//     const all = await Promise.all([response1, response2, response3, response4]);
//     const images = all.map((image) => image.body.message);

//     console.log(images);

//     await writeFilePro("dog-img.txt", images.join("\n"));
//     console.log("Random dog image saved to file");
//   } catch (err) {
//     throw new err();
//   }
// };

// (async () => {
//   console.log("Starting searching for image.........");
//   const dogPic = await getDogPic();
//   console.log("Ending of the image.........");
// })();

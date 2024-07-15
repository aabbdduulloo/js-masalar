// 1-masala:Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}
// function multiplyValues(a, b) {
//   const result = {};
//   for (const key in a) {
//     result[key] = a[key] * b;
//   }
//   return result;
// }

// const a = { a: 2, b: 3, c: 4 };
// const b = 3;
// const res = multiplyValues(a, b);
// console.log(res);
///const res = {a: 6, b: 9, c: 12}///

// 2-masala:argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
// function constWordsWithA(str) {
//   const words = str.split("");
//   let count = 0;
//   for (const word of words) {
//     if (word.includes("a") || word.includes("A")) {
//       count++;
//     }
//   }
//   return count;
// }

// const str = "Abdulla is a fantastic programmer";
// const result = constWordsWithA(str);
// console.log(result);
/// 6ta A harfi bor ///

// 3-masala:Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa
//  o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
// Input:  const books = [
//     {
//     title: “Halqa”,
//     author: “Akrom Malik”,
//     read: false
//     },
//     {
//     title: “Dunyoning ishlari”,
//     author: “O’tkir Hoshimov”,
//     read: true
//     },
// {
// title: “Iymon”,
// author: “Shayx Muhammad Sodiq Muhammad Yusuf”,
// read: true
// },
// ]
// Output:
// 1. Akrom Malik ning Halqa kitobi o’qilmagan
// 2. O’tkir Hoshimov ning Dunyoning ishlari kitobi o’qilgan
// 3. Shayx Muhammad Sodiq Muhammad Yusuf hazratlarining Iymon kitobi o’qilgan
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false,
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O'tkir Hoshimov",
//     read: true,
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true,
//   },
// ];

// function displayBooks(books) {
//   books.forEach(book => {
//     const status = book.read ? "o'qilgan" : "o'qilmagan";
//     console.log(`${book.author} ning ${book.title} kitobi ${status}`);
//   });
// }
// displayBooks(books);

// 4-masala:String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari
// array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
// Input: [”text”, “world”, “laptop”]
// Output: {”text”: 4, “world”: 4, “laptop”: 6}
// function createObjFromStr(arr) {
//   const result = {};
//   arr.forEach(str => {
//     result[str] = str.length;
//   });
//   return result;
// }

// const input = ["text", "world", "laptop"];
// const output = createObjFromStr(input);

// console.log(output);

// 5-masala:Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}
// function countWords(arr) {
//   const result = {};
//   arr.forEach(word => {
//     if (result[word]) {
//       result[word]++;
//     } else {
//       result[word] = 1;
//     }
//   });
//   return result;
// }
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const output = countWords(animals);

// console.log(output);

// 6-masala:Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];
//     Output: 54
// function ageDifference(arr) {
//   arr.sort((a, b) => a.age - b.age);
//   const youngest = arr[0].age;
//   const oldest = arr[arr.length - 1].age;
//   return oldest - youngest;
// }

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const difference = ageDifference(people);
// console.log(difference);
/// 54 ////

// 7-masala:Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni
//  alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// Output: {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}
// function getTruthyFalsy(arr) {
//   const truthy = arr.filter(item => Boolean(item));
//   const falsy = arr.filter(item => !Boolean(item));
//   return { truthy, falsy };
// }

// const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const output = getTruthyFalsy(input);
// console.log(output);

// 8-masala:Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”}
//  qiymat qaytaruvchi minManWord() nomli function yarating
// Input: “Men dasturlash kursida o’qiyman”
// Output: {minWord: “Men”, maxWord: “dasturlash”}
// function minMaxWord(sentence) {
//   const words = sentence.split(" ");
//   let minWord = words[0];
//   let maxWord = words[0];
//   words.forEach(word => {
//     if (word.length < minWord.length) {
//       minWord = word;
//     }
//     if (word.length > maxWord.length) {
//       maxWord = word;
//     }
//   });
//   return { minWord, maxWord };
// }
// const sentence = "Men dasturlash kursida o’qiyman";
// const result = minMaxWord(sentence);
// console.log(result);

// 9-masala:djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest
// "Najot ta'lim is the best" yozuvini hosil qiling

// 10:var searchMatrix = function(matrix, target) {};
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// 11-masala:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// var rotate = function (matrix) {
//   const n = matrix.length;
//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     for (let j = i; j < n - i - 1; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[n - j - 1][i];
//       matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
//       matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
//       matrix[j][n - i - 1] = temp;
//     }
//   }
// };

// let matrix1 = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];
// rotate(matrix1);
// console.log(matrix1);

// 12-masala:sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping
// const findLastWordLength = str => {
//   str = str.trim();
//   const lastIndex = str.lastIndexOf(" ");
//   const length = str.length - lastIndex - 1;
//   return length;
// };

// const str = "Bu biror string bo'lishi mumkin";
// const lastWordLength = findLastWordLength(str);
// console.log(`Oxirgi so'z uzunligi: ${lastWordLength}`);

// 13-masala:Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring.
//  (Object.entries, map, join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']
// const objectToStringArray = obj => {
//   return Object.entries(obj).map(([key, value]) => `${key}${value}`);
// };

// const obj = { a: 2, b: 5, c: 7 };
// const resultArray = objectToStringArray(obj);
// console.log(resultArray);

// 14-masala:var findMedianSortedArrays = function(nums1, nums2) {};
// nums1 = [1,2], nums2 = [3,4]
// result: 2.5
// arraylar qushilib va sort lanib urtasidagi son topilsin
// var findMedianSortedArrays = function (nums1, nums2) {
//   const merged = [...nums1, ...nums2];
//   merged.sort((a, b) => a - b);
//   const mid = Math.floor(merged.length / 2);
//   if (merged.length % 2 !== 0) {
//     return merged[mid];
//   } else {
//     return (merged[mid - 1] + merged[mid]) / 2;
//   }
// };
// let nums1 = [1, 2];
// let nums2 = [3, 4];
// console.log(findMedianSortedArrays(nums1, nums2)); // 2.5

// 15-masala:Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok
//  etgan item larni boshqa array ga ko’chiradigan function yarating
// function findDuplicates(arr) {
//   const count = {};
//   const duplicates = [];

//   for (const item of arr) {
//     count[item] = (count[item] || 0) + 1;
//   }

//   for (const item in count) {
//     if (count[item] > 1) {
//       duplicates.push(item);
//     }
//   }

//   return duplicates;
// }

// const inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 8, 1];
// const duplicatesArray = findDuplicates(inputArray);
// console.log(duplicatesArray);

// 17-masala:Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];
//     Output: 54
// function findAgeDifference(arr) {
//   arr.sort((a, b) => a.age - b.age);
//   const youngest = arr[0].age;
//   const oldest = arr[arr.length - 1].age;
//   return oldest - youngest;
// }
// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// const ageDifference = findAgeDifference(people);
// console.log(ageDifference); // 54

// let nop = [{id: "147110000400104420"}, {id: "147110000100700890"}]

// for (let i=0; i<nop.length; i++){
//         console.log(nop[i].id)
// }

// console.log(nop[0].id)

/////////////////////////////////////////////////////////////////////////////////////////////
// INI FETCH, CUMAN GABISA.. GATAU JUGA KNAPE.. KATANYA FETCH NOT DEFINED

// const spreadsheetId = "1WFMcdZf0wWAZmUnNgcZktULSrdU5J5IAvj2z8iXeaNE";
// const sheetName = "Sheet1";
// const range = "B2";
// const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!${range}`;
// const apiKey = "AIzaSyCOOtWaqtNkr51ETN9gC6P8G4IJ9qkf_nU";

// async function getValue() {
//     try {
//         const res = await fetch(url, {
//             headers: {
//                 Authorization: `Bearer ${apiKey}`,
//             },
//         });
//         if (!res.ok) {
//             throw new Error(`Request failed with status code: ${res.status}`);
//         }
//         const data = await res.json();
//         const value = data.values[0][0];
//         console.log(value);
//     } catch (error) {
//         console.error(error);
//     }
// }
// console.log(url)
// getValue();


// import axios from "axios";

// const spreadsheetId = "1WFMcdZf0wWAZmUnNgcZktULSrdU5J5IAvj2z8iXeaNE";
// const sheetName = "Sheet1";
// const range = "A1";
// const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!${range}`;

// const apiKey = "AIzaSyCOOtWaqtNkr51ETN9gC6P8G4IJ9qkf_nU";

// async function getValue() {
//   try {
//     const res = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });
//     const value = res.data.values[0][0];
//     console.log(value);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getValue();


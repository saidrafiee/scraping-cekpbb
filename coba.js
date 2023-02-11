
// function penjumlahan(a,b) {
//     let n = a + b;
//  return console.log(n)
// }
// penjumlahan(4,3)


////////////////////////////////////////////

// import axios from "axios";

// async function getData() {
//     try {
//       const res = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=RQSZVWNZx-PnQrt5ENHBzluaC05oUVBAuY-hS9fGYsoFtpBkmMEtBu7735hgPTPwDlrlQLSlp-JjYpUsY8-Pl7GPqRCTI1S6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIXplS_YFfgmnb_sA-1p_yRfriOi0IcjGOAnlqlg2R0PXndaZDK0V0b5WO_2ziebSqPYcFkb5zBCQpL4nPZwmvHTAcnfB5Qjhw&lib=MetJIrx7aaP-pJmnm-3BYzo6OPeMtZOF9');
//       console.log(res.data.data[99].NOP);
//       return res.data.data[99].NOP;

//     } catch (error) {
//       console.error(error);
//     }
//   }

//  let allData = getData().then(data => console.log(data));

//////////////////////////////////

// import axios from "axios";

// let allData = [];

// const getData = () => {
//     return axios
//         .get(
//             "https://script.googleusercontent.com/macros/echo?user_content_key=RQSZVWNZx-PnQrt5ENHBzluaC05oUVBAuY-hS9fGYsoFtpBkmMEtBu7735hgPTPwDlrlQLSlp-JjYpUsY8-Pl7GPqRCTI1S6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIXplS_YFfgmnb_sA-1p_yRfriOi0IcjGOAnlqlg2R0PXndaZDK0V0b5WO_2ziebSqPYcFkb5zBCQpL4nPZwmvHTAcnfB5Qjhw&lib=MetJIrx7aaP-pJmnm-3BYzo6OPeMtZOF9"
//         )
//         .then((res) => {
//             allData = allData.concat(res.data.data);
//             console.log(allData.length)
//             // return allData;
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// };
// getData()
// getData().then((data) => {
//     console.log(data[3].NOP)
// });
import puppeteer from "puppeteer";

const nop = ['147110000100700890', "147101000300405440"]
const ini = nop[1]
// console.log(nop[1])
const bukaBrowser = async () => {
    try {
        const browser = await puppeteer.launch({ headless: false, devtools: false });
        const page = await browser.newPage();
        await page.goto("http://cekpbb.pekanbaru.go.id/");
        const tahun = "2022"


        await page.type("#nop", ini);
        await page.click("#idCetakNop");
        await page.waitForSelector("#example > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)")
        await page.waitForTimeout(1000)
        let text = await page.$eval(
            "#example > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(2)", (el) => el.innerText
        );
        let color = await page.$eval(
            "#example > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(2)", (el) => window.getComputedStyle(el).color
        );


        if (text === tahun) {
            if (color === "rgb(255, 0, 0)") {
                console.log(`belum bayar ${ini} tahun ${text} `)
            }
            else if (color === "rgb(255, 165, 0)") {
                console.log(`kurang bayar ${ini} tahun ${text}`)
            }
            else {
                console.log(`sudah lunas ${ini} tahun ${text}`)
            }
        } else {
            console.log(`ada kesalahan, cek NOP ini: ${ini}`)
        }
    }

    catch (error) {
        console.log(error)
    }
}

bukaBrowser()
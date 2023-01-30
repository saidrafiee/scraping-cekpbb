import puppeteer from 'puppeteer';
import axios from "axios";

let allData = [];

const getData = async () => {
    try {
        const res = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=RQSZVWNZx-PnQrt5ENHBzluaC05oUVBAuY-hS9fGYsoFtpBkmMEtBu7735hgPTPwDlrlQLSlp-JjYpUsY8-Pl7GPqRCTI1S6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIXplS_YFfgmnb_sA-1p_yRfriOi0IcjGOAnlqlg2R0PXndaZDK0V0b5WO_2ziebSqPYcFkb5zBCQpL4nPZwmvHTAcnfB5Qjhw&lib=MetJIrx7aaP-pJmnm-3BYzo6OPeMtZOF9");
        allData = allData.concat(res.data.data);
        await bukaBrowser();
    } catch (error) {
        console.error(error);
    }
};

const bukaBrowser = async () => {
    try {
        const browser = await puppeteer.launch({ headless: false, devtools: false });
        const page = await browser.newPage();
        await page.goto("http://cekpbb.pekanbaru.go.id/");

        for (let i = 172; i < allData.length; i++) {

            await page.type("#nop", allData[i].NOP);
            await page.click("#idCetakNop");
            await page.waitForSelector("#example > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)")
            await page.waitForTimeout(1000)
            let text = await page.$eval(
                "#example > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(1)", (el) => window.getComputedStyle(el).color
            );
            if (text === "rgb(255, 0, 0)") {
                console.log(`belum bayar ${allData[i].NOP} ${allData[i].NAMA} `)
            } else {
                console.log(`sudah lunas ${allData[i].NOP} ${allData[i].NAMA} `)
            }
            await page.waitForSelector("#mdl > div > div > div.modal-header > button.close")
            await page.waitForTimeout(1500)
            await page.hover("#mdl > div > div > div.modal-header > button.close > span")
            await page.click("#mdl > div > div > div.modal-header > button.close > span")
            await page.waitForTimeout(1500)
            await page.click("#nop", { clickCount: 2 })
            await page.waitForTimeout(500)
        }
    } catch (error) {
        console.error(error);
    }
};

getData();


// let nop = [{ id: "147110000400104420" }, { id: "147110000100700890" }]



// #idModul > table > tbody > tr:nth-child(1) > th
// #mdl > div > div
// #mdl > div > div > div.modal-body
// #idModul
// #tdftrPel
// #example
// #example > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)

// #mdl > div > div > div.modal-body > #idModul > #tdftrPel > #example > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)


// await page.waitForTimeout(5000)


//    console.log(color)





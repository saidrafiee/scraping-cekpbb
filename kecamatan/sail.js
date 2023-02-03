import puppeteer from 'puppeteer';
import axios from "axios";

let allData = [];

const getData = async () => {
    try {
        const res = await axios.get("https://script.google.com/macros/s/AKfycbxoYwN_T8LlkU-F1D1Axy0qZfwx_jEFq5tGPeWPP4NoQZzxxsWRoYGGHZf-1ZvqTkz30g/exec");
        allData = allData.concat(res.data.data);
        await bukaBrowser();
    } catch (error) {
        console.error(error);
    }
};

const bukaBrowser = async () => {
    try {
        const browser = await puppeteer.launch({ headless: true, devtools: false });
        const page = await browser.newPage();
        await page.goto("http://cekpbb.pekanbaru.go.id/");

        for (let i = 0; i < allData.length; i++) {

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






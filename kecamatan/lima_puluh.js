import puppeteer from 'puppeteer';
import axios from "axios";

let allData = [];
let endpoint = "https://script.google.com/macros/s/AKfycbz8bF0Sc5J_PLnIlIpHl31prXbhIqMDG2i17qw40AHbRYvYUyDDJkmN4qrahpSIm7gM/exec"
const getData = async () => {
    try {
        const res = await axios.get(endpoint);
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

        const tahun = "2022"  //PENGECEKEAN TAHU BERAPA, ATUR DISINI  <<<<<<<<<
        for (let i = 0; i < allData.length; i++) {

            await page.type("#nop", allData[i].NOP);
            await page.click("#idCetakNop");
            await page.waitForSelector("#example > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)")
            await page.waitForTimeout(1000)
            let text = await page.$eval(
                "#example > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(2)", (el) => el.innerText
            );
            let color = await page.$eval(
                "#example > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(1)", (el) => window.getComputedStyle(el).color
            );

            if (text === tahun) {
                if (color === "rgb(255, 0, 0)") {
                    console.log(`${text} belum bayar ${allData[i].NOP} ${allData[i].NAMA}`)
                }
                else if (color === "rgb(255, 165, 0)") {
                    console.log(`${text} //kurang bayar// ${allData[i].NOP} ${allData[i].NAMA}`)
                }
                else {
                    console.log(`${text} **sudah lunas** ${allData[i].NOP} ${allData[i].NAMA}`)
                }
            }
            else {
                console.log(`ada kesalahan urutan, cek NOP ini: ${allData[i].NOP}, terdata tahun ${text}`)
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






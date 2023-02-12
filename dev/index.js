import puppeteer from 'puppeteer';
import axios from "axios";

let allData = [];
const endpoint = "https://script.googleusercontent.com/macros/echo?user_content_key=RQSZVWNZx-PnQrt5ENHBzluaC05oUVBAuY-hS9fGYsoFtpBkmMEtBu7735hgPTPwDlrlQLSlp-JjYpUsY8-Pl7GPqRCTI1S6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIXplS_YFfgmnb_sA-1p_yRfriOi0IcjGOAnlqlg2R0PXndaZDK0V0b5WO_2ziebSqPYcFkb5zBCQpL4nPZwmvHTAcnfB5Qjhw&lib=MetJIrx7aaP-pJmnm-3BYzo6OPeMtZOF9"
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
export default bukaBrowser


// let nop = [{ id: "147110000400104420" }, { id: "147110000100700890" }]







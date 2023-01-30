import puppeteer from 'puppeteer';
import axios from "axios";

const datas = () => {
    axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=RQSZVWNZx-PnQrt5ENHBzluaC05oUVBAuY-hS9fGYsoFtpBkmMEtBu7735hgPTPwDlrlQLSlp-JjYpUsY8-Pl7GPqRCTI1S6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIXplS_YFfgmnb_sA-1p_yRfriOi0IcjGOAnlqlg2R0PXndaZDK0V0b5WO_2ziebSqPYcFkb5zBCQpL4nPZwmvHTAcnfB5Qjhw&lib=MetJIrx7aaP-pJmnm-3BYzo6OPeMtZOF9')
      .then(res => {
        // console.log(res.data.data[99].NOP);
        // console.log(res.data.data.length)
        let datas = res.data.data
        return datas
      })
      .catch(error => {
        console.error(error);
      });
}
datas()

let nop = [{id: "147110000400104420"}, {id: "147110000100700890"}]

const bukaBrowser = async () => {
    const browser = await puppeteer.launch({ headless: false, devtools: true });
    const page = await browser.newPage();
    await page.goto("http://cekpbb.pekanbaru.go.id/");

    for (let i=0; i<nop.length; i++){
        await page.type("#nop", nop[i].id);
        await page.click("#idCetakNop");
        await page.waitForSelector("#example > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)")
        let text = await page.$eval(
            "#example > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1)", (el) => window.getComputedStyle(el).color
        );
        if (text === "rgb(255, 0, 0)") {
            console.log("belum bayar")
        } else (
            console.log("sudah lunas")
        )
        await page.click("#mdl > div > div > div.modal-header > button.close");
    }


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


};


bukaBrowser()
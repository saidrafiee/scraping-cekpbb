
// function penjumlahan(a,b) {
//     let n = a + b;
//  return console.log(n)
// }
// penjumlahan(4,3)

// import axios from "axios";
// const datas = () => {
//     axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=RQSZVWNZx-PnQrt5ENHBzluaC05oUVBAuY-hS9fGYsoFtpBkmMEtBu7735hgPTPwDlrlQLSlp-JjYpUsY8-Pl7GPqRCTI1S6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIXplS_YFfgmnb_sA-1p_yRfriOi0IcjGOAnlqlg2R0PXndaZDK0V0b5WO_2ziebSqPYcFkb5zBCQpL4nPZwmvHTAcnfB5Qjhw&lib=MetJIrx7aaP-pJmnm-3BYzo6OPeMtZOF9')
//       .then(res => {
//         // console.log(res.data.data[99].NOP);
//         // console.log(res.data.data.length)
//     //    let all = (res.data.data)
//         return res.data.data[99].NOP
//       })
//       .catch(error => {
//         console.error(error);
//       });
//       return 
// }

// console.log(datas())

////////////////////////////////////////////

import axios from "axios";

async function getData() {
    try {
      const res = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=RQSZVWNZx-PnQrt5ENHBzluaC05oUVBAuY-hS9fGYsoFtpBkmMEtBu7735hgPTPwDlrlQLSlp-JjYpUsY8-Pl7GPqRCTI1S6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIXplS_YFfgmnb_sA-1p_yRfriOi0IcjGOAnlqlg2R0PXndaZDK0V0b5WO_2ziebSqPYcFkb5zBCQpL4nPZwmvHTAcnfB5Qjhw&lib=MetJIrx7aaP-pJmnm-3BYzo6OPeMtZOF9');
      console.log(res.data.data[99].NOP);
      return res.data.data[99].NOP;

    } catch (error) {
      console.error(error);
    }
  }
  
 let allData = getData().then(data => console.log(data));

  
  


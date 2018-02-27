const https = require('https');
const fs = require('fs');
const getReportFileTitle = require('./services/getReportFileTitle');


const entriesUrls = fs.readFileSync('./urls/urlsList.txt', "utf8");
const arrUrls = entriesUrls.split('\r\n');

console.log("Start testing page speed of " + arrUrls.length + " urls" + "\n");

const key = 'AIzaSyAG0UU_l8EA-3Y3YBlbZFQtSvyNm6YIZlY';
let stopTrigger = null;

const sendPagespeedRequest = (idx, url) => {
  https.get(
    `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?url=${url}&key=${key}`, 
    (res) => {

      if (res.statusCode === 429 || res.statusCode === 403) {

        if (stopTrigger) {
          stopTrigger = null;
          fs.writeFileSync('./services/memoryDisconnect.txt', `${idx}`, (err) => {
            if (err) throw error; 
          });

          throw new Error (
            "You probably exceeded the limit requests per a day.\n" 
            + "You should wait 24 hours to restart index.js.\n" 
            + "More additional info about pagespeed api limits find here: "
            + "https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas\n"
          );
        }

        stopTrigger = 1;
        setTimeout(sendPagespeedRequest, 2000, idx, url);
      } else {
        console.log("Testing page speed of: "  + url);

        const fileTitle = getReportFileTitle(url);
        let pagespeedInfo = '';

        res.on('data', (data) => {
          pagespeedInfo += Buffer.from(data).toString('utf8');
        });

        res.on('end', () => {

          fs.open(`./results/${fileTitle}.txt`, 'a+', (err) => {
            if (err) throw err;
          });

          fs.writeFile(`./results/${fileTitle}.txt`, `${pagespeedInfo}`, (err) => {
            if (err) throw error; 
            console.log("The results were written to the file: " + fileTitle + "\n");
          });

          fs.writeFileSync('./services/memoryDisconnect.txt', '0', (err) => {
            if (err) throw error; 
          });
        });
      }

  }).on('error', (error) => {
    console.error(error.code);
    if (error.code === 'ENOENT') {
      throw new Error (
        "You probably lost connection to https://www.googleapis.com\n" 
        + "Check your internet connection and restart index.js"
      );
    }
  });
}

let timer = 0;
const startPoint = fs.readFileSync('./services/memoryDisconnect.txt', "utf8");

for (let i = startPoint; i < arrUrls.length; i++) {
  const urlItem = arrUrls[i];
  timer = timer + 1000;
  setTimeout(sendPagespeedRequest, timer, i, urlItem);
}
const puppeteer = require('puppeteer');
const {insertToDB} = require("./utils/db.js");


(async()=>{
    const browser = await puppeteer.launch({headless:true});

    const page = await browser.newPage();
    await page.goto("https://www.nytimes.com/");
    page.setDefaultNavigationTimeout(60000)

    let heading = await page.evaluate(()=>{
        const headtag = document.querySelectorAll(".css-1l10c03.e17qa79g0 h3");
        let headinTags = [];
        headtag.forEach((head)=>{
            headinTags.push(head.innerHTML);
        })
        return headinTags;
    })
    console.log("headings",heading);
    await insertToDB({
        headings:heading,
    })

    await browser.close();
})();




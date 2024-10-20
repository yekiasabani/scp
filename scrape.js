import puppeteer from 'puppeteer';
const rate = async function getRate(res, currencies) {
	const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.goto('https://bonbast.com/');
        
        let rates = {};
        for (var i=0; i < currencies.length; i++) {
            const sellPrice = await page.$eval(`#${currencies[i]}1`, el => el.innerText)
            const buyPrice = await page.$eval(`#${currencies[i]}2`, el => el.innerText)
    
            rates[currencies[i]] = {'sell price' : sellPrice, 'buy price' : buyPrice}
        }
        console.log(rates);
        res.status(200).json(rates);
    } catch (err) {
        res.status(404).send(`Somethine went wrong => ${err}`);
    } finally {
        browser.close();
    }
}
 export { rate };
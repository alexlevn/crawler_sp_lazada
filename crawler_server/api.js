const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const getLazadaProduct = async (url) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const $ = cheerio.load(await page.content());

    let arrSmallImages = $('.item-gallery__image-wrapper > img');
    let arrJsonSmallImages = [];

    arrSmallImages.each((i, item) => {
        arrJsonSmallImages.push({ "link": item.attribs['src'].replace('//', 'http://').replace('_.webp', '') })
    });

    // Reflect.ownKeys(item.attribs).forEach(i => {
    //     console.log('item = ', item.attribs['src']);
    // })
    // console.log('value = ', );

    let result = {
        mainImage: $('img.pdp-mod-common-image').attr('src').replace('//', 'http://').replace('_.webp', ''),
        smallImages: arrJsonSmallImages,
        name: $('.pdp-mod-product-badge-title').text(),
        price: $('.origin-block >  .pdp-price.pdp-price_type_deleted.pdp-price_color_lightgray.pdp-price_size_xs').text(),
        promoPrice: $('.pdp-product-price > .pdp-price.pdp-price_type_normal.pdp-price_color_orange.pdp-price_size_xl').text(),
        rate: $('span.score-average').text(),
        description: $('div.html-content.pdp-product-highlights').text(),
        link: url
    }
    await browser.close();

    return result;
}


module.exports = { getLazadaProduct };
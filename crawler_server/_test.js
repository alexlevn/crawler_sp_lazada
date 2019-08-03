var { getLazadaProduct } = require('./api');

let abc = async () => {
    let aa = await getLazadaProduct('https://www.lazada.vn/products/dong-ho-pomodoro-giup-ban-lam-viec-toi-uu-phien-ban-kim-loai-i258253027-s357946250.html');
    console.log('aa = ', aa);
}

abc();

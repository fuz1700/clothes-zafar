// array
// string
// metodlar
// backend
// status code
// 200 - successfull - yashil
// 201 - yengi yaratilinganida - yashil
// 204 - nito - sariq

// error
// cors - qizil
// 500 - serverda xatolik

// 400 - bad request - notogri so'rov
// 403 - ruhsat berilmagan - forbidden
// 404 - not found - topilmadi

// CRUD
// HTTP metodlar
// C - create - yaratish - post
// R - read - o'qish - get
// U - update - o'zgartirish - patch/put
// D - delete - o'chirish - delete
let main = document.querySelector('.main');
const API = 'https://fakestoreapi.com/products';

// 2ta funksiya
// 1tasi backenddan opkeberadi
// 2-htmlga ekran chiqarib beradi

// sync
// async

// response - kevotkan ma'lumot
// request - bzadan ketvotkan ma'lumot

async function getAPI() {
  const response = await fetch(API);
  const data = await response.json();
  htmlga(data);
}

function htmlga(data) {
  let html = '';
  data.map((el) => {
    html += `
        <div class="card">
            <img src=${el.image} alt="" />
            <h3>${el.title}</h3>
        </div>
        `;
    main.innerHTML = html;
  });
}
















async function getMen() {
  const response = await fetch(API);
  const data = await response.json();
  htmlgaMen(data);
}

function htmlgaMen(data) {
  let html = '';
  const men = data.filter((el) => el.category === "men's clothing");
  men.map((el) => {
    html += `
          <div class="card">
              <img src=${el.image} alt="" />
              <h3>${el.title}</h3>
          </div>
          `;
    main.innerHTML = html;
  });
}







async function getWomen() {
  const response = await fetch(API);
  const data = await response.json();
  htmlgaWomen(data);
}

function htmlgaWomen(data) {
  let html = '';
  const men = data.filter((el) => el.category === "women's clothing");
  men.map((el) => {
    html += `
          <div class="card">
              <img src=${el.image} alt="" />
              <h3>${el.title}</h3>
          </div>
          `;
    main.innerHTML = html;
  });
}







async function getJewelery() {
  const response = await fetch(API);
  const data = await response.json();
  htmlgaJewelery(data);
}

function htmlgaJewelery(data) {
  let html = '';
  const men = data.filter((el) => el.category === "jewelery");
  men.map((el) => {
    html += `
          <div class="card">
              <img src=${el.image} alt="" />
              <h3>${el.title}</h3>
          </div>
          `;
    main.innerHTML = html;
  });
}



async function getElectronics() {
  const response = await fetch(API);
  const data = await response.json();
  htmlgaElectronics(data);
}

function htmlgaElectronics(data) {
  let html = '';
  const men = data.filter((el) => el.category === "electronics");
  men.map((el) => {
    html += `
          <div class="card">
              <img src=${el.image} alt="" />
              <h3>${el.title}</h3>
          </div>
          `;
    main.innerHTML = html;
  });
}











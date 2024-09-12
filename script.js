const catalog = [
  {
   image: 'https://avatars.mds.yandex.net/i?id=c46d1b1247b4983483352998e7802a98_sr-11376022-images-thumbs&n=13',
    title: 'сумка',
    price: 100, 
    oldPrice: 150, 
  },
  {
   image: 'https://img.tttcdn.com/product/xy/500/500/p/gu1/O/9/OS1403-9/OS1403-9-1-1975-0yGE.jpg',
    title: 'портфель',
    price: 120, 
    oldPrice: 160, 
  },
  {
   image: 'https://avatars.mds.yandex.net/i?id=1bdfeed2fe56cd943fb109fe1c3bf440_l-10353822-images-thumbs&ref=rim&n=13&w=1000&h=1000',
    title: 'клатч',
    price: 150, 
    oldPrice: 180, 
  },
 
]

const wrapper = document.querySelector('.wrapper')

catalog.forEach(card => {
  wrapper.innerHTML += `
  <div class="card">
    <img src=${card.image} alt="">
    <h3>${card.title}</h3>
    <p>${card.price}$</p>
    <s>${card.oldPrice}$</s>
  </div>
  `
})

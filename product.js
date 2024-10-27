var img = document.getElementsByClassName('test')
    for (var i = 0; i < img.length; i++) {
      img[i].src = localStorage.getItem('img', 'key.image')
    }

    var pr = document.getElementsByClassName('price')
    for (let i = 0; i < pr.length; i++) {
    pr[i].innerHTML = localStorage.getItem('price', 'key.priceCents') / 100 + '$';
    }
    var oldPrice = document.getElementById('oldPrice')
    oldPrice.innerHTML = parseFloat((localStorage.getItem('price', 'key.priceCents') / 75).toFixed(2)) + '$';
    var title = document.getElementsByClassName('product-title')
    for (let i = 0; i < pr.length; i++) {
      title[i].innerHTML = localStorage.getItem('name', 'key.name');
    }
    var img2 = document.getElementsByClassName('choose')
    for (var i = 0; i < img2.length; i++) {
      img2[i].src = localStorage.getItem('img', 'key.image')
    }
    var checkprice = document.getElementById('price2')
    checkprice.innerHTML = localStorage.getItem('price', 'key.priceCents') / 100 + " $";


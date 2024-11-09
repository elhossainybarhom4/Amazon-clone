var xhr = new XMLHttpRequest();
xhr.open('GET', 'product.json');

var parent = document.getElementById("parent")
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let products = JSON.parse(xhr.response)
        for (let key of products) {
            // console.log(key)
            let a = document.createElement('a')
            a.href='/product.html'
            
            // a.style.width = '20%'
            // a.style.margin = '1px'
            let div = document.createElement('div')
            div.addEventListener('click', function () {
                localStorage.setItem('id', key.id)
                localStorage.setItem('price', key.priceCents)
                localStorage.setItem('name', key.name)
                localStorage.setItem('img',key.image)
                
            })
            div.style.display = 'inline-block'
            div.style.textAlign = 'center'
            div.style.width = '20%'
            div.style.margin = '10px'
            div.style.background = 'white'
            //  div.style.border = '2px solid gray'
            div.style.boxShadow = ' 5px 5px 5px 5px rgba(1, 1, 1, 50%)'
            
            let img = document.createElement('img')
            img.src = key.image
            img.width = 200
            img.height = 200
            a.appendChild(img)

            let h3 = document.createElement('h3')
            h3.innerText = key.name
            h3.style.padding = '5px'
            h3.style.minHeight='55px'
            a.appendChild(h3)

            div.appendChild(a)
            let h4 = document.createElement('h4')
            h4.innerText = key.priceCents/100+"$"
            h4.style.padding = '5px'
            h4.style.color = 'green'
            div.appendChild(h4)
            let btn = document.createElement('button')
            btn.innerHTML = 'add to cart'
            btn.style.background='#ffd814'
            btn.style.width='50%'
            btn.style.height='30px'
            btn.style.padding='5px'
            btn.style.marginTop='5px'
            btn.style.marginBottom='10px'
            btn.style.borderRadius='15px'
            btn.style.borderColor='#fcd200'
            div.appendChild(btn)
            // a.appendChild(div)
            parent.appendChild(div)
            // document.body.appendChild(a)

        }

    }
}
xhr.send()
// /////


// ///


let products = [];

fetch('product.json')
.then(response => response.json())
.then(data => {
    

    products = data;      
    searchInput.addEventListener('keyup', searchProducts); 
})
.catch(error => console.error('Error loading products:', error));
      
  const searchInput = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');
  const productOptions = document.getElementById('productOptions');
 


   

  //   
  function displayResults(results) {
      resultsDiv.innerHTML = '';
    //   productOptions.innerHTML = '';
    const productId = sessionStorage.getItem('selectedProductId');
      if (results.length === 0) {
          resultsDiv.innerHTML = '<p>No results found.</p>';
      } else {
          results.forEach(product => {
              const div = document.createElement('div');
              div.classList.add('product');
              div.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <div>
                      <h2>${product.name}</h2>
                      <p>Price: $${(product.priceCents / 100)}</p>
                  </div>
              `;
              div.addEventListener('click', () => viewProduct(product.id));
              resultsDiv.appendChild(div);

              const option = document.createElement('option');
                    option.value = product.id;
                    option.textContent = product.name;
                    productSelect.appendChild(option);
          });
      }
  }

      
  function searchProducts() {
      const searchTerm = searchInput.value.trim().toLowerCase();

      if (searchTerm.length === 0) {
          displayResults([]); 
      } else {
          const results = products.filter(product =>
              product.name.toLowerCase().includes(searchTerm)
          );
          displayResults(results);    
      }
  }

  function viewProduct(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
     
       
        window.location.href = `product.html?id=${productId}`;
    }
}


  


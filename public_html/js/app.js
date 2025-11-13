let filtrodeProdutos = [...produtos];

const arraydeProdutos = document.querySelector('.products-container');

const mostraProdutos = () => {

    if (filtrodeProdutos.length < 1) {
        arraydeProdutos.innerHTML = '<h6>Desculpe, nenhum produto encontrado!</h6>';
        return;
    }
    arraydeProdutos.innerHTML = filtrodeProdutos
        .map((produto) => {
          
        const {title, image, price } = produto;
      
        return `<div class="product">
                <figure>  
                  <img
                    src="${image}"
                    class="product-img img"
                    alt=""
                  />
                  <figcaption>
                    <h5 class="product-name">${title}</h5>
                    <span class="product-price">R$ ${price}</span>
                  </figcaption>
                </figure>  
            </div>`;
    })
    .join('');
};

mostraProdutos();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('submit', (e) => e.preventDefault());
searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
  filtrodeProdutos = produtos.filter((produto) => {
    return produto.title.toLowerCase().includes(inputValue);
  });
  mostraProdutos();
});


//    console.log(
//       produtos.filter((produto) => {
//         return produto.title.toLowerCase().includes('');
//       })
//    );    

const empresasDOM = document.querySelector('.empresas');

const displayButtons = () => {
  const buttons = [
    'todas',
    ...new Set(produtos.map((produto) => produto.company)),
  ];
  // console.log(buttons);
  empresasDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

empresasDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'todas') {
      filtrodeProdutos = [...produtos];
    } else {
      filtrodeProdutos = produtos.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    mostraProdutos();
  }
});

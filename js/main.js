const fetchData = async () => {
    try{
        let response = await fetch("https://fakestoreapi.com/products",{
            method : "GET"
        });

        let data = await response.json();
        const productContainer = document.getElementById("product-container");
        data.map(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src=product.image;
            image.alt=product.title;

            const title = document.createElement('h3');
            title.textContent = product.title;

            const price = document.createElement('p');
            price.textContent = '$' +product.price;

            const description = document.createElement('p');
            description.textContent = product.description;
            description.classList.add('description');

            const rating = document.createElement('span');
            rating.textContent = 'Rating ' +product.rating.rate;
            rating.classList.add('rating');
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(description);
            card.appendChild(rating);
            productContainer.appendChild(card);

        });
    }
    catch(err){
        console.log(err)
    }
}

fetchData();
 
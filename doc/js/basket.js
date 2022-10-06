if(localStorage.getItem('card')=== null){
    localStorage.setItem('card', JSON.stringify([]))
}






let btns = document.getElementsByClassName('add_card');
setTimeout(() => {
    for(let btn of btns){
        btn.onclick = function(e){
            let basket = JSON.parse(localStorage.getItem('card'));
            let id = e.target.parentElement.parentElement.id;
            let price = e.target.previousElementSibling.innerHTML;
            let title = e.target.parentElement.children[0].innerHTML;
            let image = e.target.parentElement.previousElementSibling.src;

            let existProd = basket.find(z => z.ID === id );
            if (existProd == undefined) {
                basket.push({
                    ID: id,
                    Price: price,
                    Title: title,
                    Image: image,
                    Count: 1,
                    
                })
            }else{
                existProd.Count += 1 ;
            }
            localStorage.setItem('card', JSON.stringify(basket));
        }
    }
}, 500);



function GetElementsForBasket(){
    let basket = JSON.parse(localStorage.getItem('card'));
    let items = '';
    basket.forEach( item => {
        items += `
                    <div class="col-6 mt-4">
                        <a  class="btn"  class="btn"href=""><i class="fa-solid fa-xmark"></i></a>
                        <img src="${item.Image}" alt="">
                        <a href="">${item.Title}</a>
                    </div>
                    <span class="col-2">$115.00</span>
                    <div class="col-2">
                        <a class="btn" id="plus" href="">-</a>
                        <span>5</span>
                        <a class="btn" id="minus" href="">+</a>
                    </div>
                    <span class="col-2" >$277.00</span>
        `

    })
    document.getElementById('product').innerHTML = items;
    
}
GetElementsForBasket();



function CountCard() {
    let basket = JSON.parse(localStorage.getItem('card'));
    if (basket.length === 0) {
        document.getElementById('card').style.display = 'none';
    }else{
        document.getElementById('card').style.display = 'block';
    }
    
}
CountCard();


    
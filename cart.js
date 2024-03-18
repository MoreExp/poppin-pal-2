let items = [
    {
        name: "Barbeque",
        pic: "bbqpop",
        price: 9.60,
        id: 0,
    },
    {
        name: "Cheese",
        pic: "cheesepop",
        price: 9.60,
        id: 1,
    },
    {
        name: "Salted Egg",
        pic: "saleggpop",
        price: 11.30,
        id: 2,
    },
    {
        name: "Sea Salt",
        pic: "seasalt",
        price: 9.60,
        id: 3,
    },
    {
        name: "Seaweed",
        pic: "seaweed",
        price: 9.60,
        id: 4,
    },
    {
        name: "Sour Popcorn",
        pic: "sourpop",
        price: 9.60,
        id: 5,
    }
]
let itemcart = [];
let nocart = 0;
function indexdisplay() {
    //nocart=parseInt(localStorage.getItem('nocartls'));
    //document.getElementById('cartdisplay').innerHTML=nocart;
    itemcheck = parseInt(localStorage.getItem('nocartls'));
    if (itemcheck) {
        document.getElementById('cartdisplay').innerHTML = nocart;
    }
    else {
        document.getElementById('cartdisplay').innerHTML = 0;
    }
    let productlist = document.getElementById("indexproduct");
    let htmltag = "";
    items.forEach((item, i) => {
        htmltag = "<div class='col-md-4' style='margin-top:15px;'> <div class='card'> <div class='card-header'> <img class='img-item' src='./image/" + item.pic +
            ".png' alt=''> <div class='card-body'><h4 class='card-title text-truncate'>" + item.name +
            "</h4> <h4 class='card-text'>RM" + item.price.toFixed(2) +
            "</h4> <a  class='btn btn-dark add-to-cart'>Add To Cart</a></div></div></div></div>";
        productlist.innerHTML += htmltag;
    });

    addtocartbtn = document.querySelectorAll('.add-to-cart');
    // add eventlistener to add cart button
    for (let i = 0; i < addtocartbtn.length; i++) {
        addtocartbtn[i].addEventListener('click', () => {
            additem(i);
        });
    }
}

function additem(i) {
    let itemcheck = parseInt(localStorage.getItem('nocartls'));
    let itemcart = [];

    if (itemcheck) {
        itemcart = JSON.parse(localStorage.getItem('itemcartls'));
        itemcart.push(items[i]);
    } else {
        itemcart.push(items[i]);
    }

    localStorage.setItem('itemcartls', JSON.stringify(itemcart));
    let nocart = itemcart.length;
    localStorage.setItem('nocartls', nocart);
    document.getElementById('cartdisplay').innerHTML = nocart;
}



//function for cart display
function cartpagedisplay() {
    let itemindex = parseInt(localStorage.getItem('nocartls'));
    if (itemindex) {
        nocart = itemindex;
        document.getElementById("cartdisplay").innerHTML = nocart;
    }
    itemcart = JSON.parse(localStorage.getItem('itemcartls'));
    productcontainer = document.getElementById("product-container")
    if (itemcart) {
        let totalprice = 0;
        // Create an object to store unique items
        let uniqueItems = {};
        itemcart.forEach((item) => {
            if (uniqueItems[item.name]) {
                // If the item already exists, increment its quantity
                uniqueItems[item.name].quantity++;
            } else {
                // If it's a new item, add it to the uniqueItems object
                uniqueItems[item.name] = {
                    item: item,
                    quantity: 1
                };
            }
        });
        // Clear the product container before re-populating it
        productcontainer.innerHTML = '';
        // Iterate over unique items and display them
        Object.values(uniqueItems).forEach((uniqueItem) => {
            let item = uniqueItem.item;
            let quantity = uniqueItem.quantity;
            let htmltag = "<div class='col-3'><img class='img-cart'src='./image/" + item.pic +
                ".png'></img></div><div class='col-3'><p>" + item.name + " x <span class='quantity'>" + quantity + "</span></p></div><div class='col-3'>" + (item.price * quantity).toFixed(2) +
                "</div><div class='col-3 mb-3'> <a class='btn btn-danger delbtn' style='margin-top:5px;'>Delete</a></div><br><hr>";
            productcontainer.innerHTML += htmltag;
            totalprice += item.price * quantity;
        });

        document.getElementById("totalprice").innerHTML = totalprice.toFixed(2);
        let delbtn = document.querySelectorAll(".delbtn");
        for (let i = 0; i < delbtn.length; i++) {
            delbtn[i].addEventListener('click', () => {
                removeitem(i);
            });
        }
    }
}

function removeitem(i) {
    let itemcart = JSON.parse(localStorage.getItem('itemcartls'));
    // Remove the item from the cart
    itemcart.splice(i, 1);
    localStorage.setItem("itemcartls", JSON.stringify(itemcart));
    // Update the cart display
    localStorage.setItem("nocartls", itemcart.length);
    location.reload();
}
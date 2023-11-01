//Art1_Picasso: price_1Nw9YoEQLsa2XJpCPrsjuhLp
//Art2_MonaLIsa:price_1Nw9afEQLsa2XJpCiLFFm9M3
//Art3__:price_1Nw9bWEQLsa2XJpCCTTf5rWO
import reactPic from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/albuterol.jpeg';
import reactPic2 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/download_-removebg-preview.png';
import reactPic3 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/azythro.jpeg';
import reactPic4 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/cerave.jpeg';
import reactPic5 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/mederma__1_-removebg-preview.png';
import reactPic6 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/zandu__1_-removebg-preview.png';
import reactPic7 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/para-removebg-preview__1_-removebg-preview.png';
import reactPic8 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/met__1_-removebg-preview.png';
import reactPic9 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/advil.png';

const productsArray = [
    
    {
        id: "price_1O7B2ZG5qw2KLbYdIuBJf9OG",
        title: "CeraaVe",
        price: 9.99,
        image: reactPic4,
    },
    
    {
        id: "price_1O7B1RG5qw2KLbYdyFPaj8O9",
        title: "Azythromycin",
        price: 7.99,
        image:reactPic3,
   
    },
    {
        id: "price_1O7B9VG5qw2KLbYdwiWH1bl5",
        title: "Advil",
        price: 8.59,
        image: reactPic9,
    },
   
    {
        id: "price_1O7B2zG5qw2KLbYdrV308nBh",
        title: "Mederma",
        price: 39.99,
        image: reactPic5,
    },
    {
        id: "price_1O7B44G5qw2KLbYdjvrEXdMg",
        title: "ZanduBalm",
        price: 6.99,
        image: reactPic6,
    },
    {
        id: "price_1O7AyXG5qw2KLbYdreXzGDju",
        title: "Paracetomol",
        price: 4.99,
        image: reactPic7,
    },
   
    {
        id: "price_1O7B4iG5qw2KLbYdP0XvMZk1",
        title: "Albuterol",
        price: 3.70,
        image: reactPic,
        
    },
   
    {
        id: "price_1O7B53G5qw2KLbYdbr0lwjkV",
        title: "Metformin",
        price: 5.60,
        image: reactPic8,
    },
    {
        id: "price_1O7B0dG5qw2KLbYdJZGLNbQY",
        title: "Disprin",
        price: 2.99,
        image: reactPic2,
        
        
    },



];
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData };

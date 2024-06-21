const products =[
    {
        name: "Gray Chair",
        price: "44,000",
        photo: "Images/p1.jpg"
    },
    {
        name: "Dark Blue Single Sofa ",
        price: "50,000",
        photo: "images/p2.jpg"
    },
    {
        name: "Pink Single Sofa",
        price: "19M",
        photo: "images/p3.jpg"
    },
    {
        name: "Light Brown Studio Chair",
        price: "35,000",
        photo: "images/p4.jpg"
    },
    {
        name: "Black Plastic Studio Chair",
        price: "21,000",
        photo: "images/p5.jpg"
    },
    {
        name: "Dark Plastic Studio Chair",
        price: "35,000",
        photo: "images/p6.jpg"
    },
]

const list = document.querySelector(".product_list");
count = 1;

products.forEach((product)=>{
    const my_link = document.createElement("a");
    const container = document.createElement("div");
    container.classList.add("dope_products");
 
    my_link.style.textDecoration = "none"
    
    const img = document.createElement("img");
    img.src = product.photo;
    img.alt = product.name;
    img.style.width = "100%";
    img.style.height = "300px";
    //img.style.transform = translate(4);

    const details = document.createElement("div");
    details.classList.add("details");

    const name = document.createElement("div");
    name.innerHTML = product.name;
    name.classList.add("name");

    const price = document.createElement("div");
    price.innerHTML = `Price: ${product.price}`;
    price.classList.add("price");

    details.appendChild(name);
    details.appendChild(price);
    container.appendChild(img);
    container.appendChild(details);
    list.appendChild(container);
    my_link.appendChild(container);
    my_link.href = `index${count}.html`;
   
    list.appendChild(my_link);
    
  count+=1

})





const bedrooms = [
    {
        name: "King Sized Family Bed",
        price: "540,000",
        photo: "Images/Bedroom/pexels-charlotte-may-5825584.jpg"
    },
    {
        name: "Dark Brown Coffe Table",
        price: "75,000",
        photo: "Images/Bedroom/pexels-fotios-photos-1517145.jpg"
    },
    {
        name: " Study Table & Chair",
        price: "650,000",
        photo: "Images/Bedroom/pexels-heyho-6636293.jpg"
    },
    {
        name: "Quenn Sized Childrens Bed",
        price: "660,000",
        photo: "Images/Bedroom/pexels-itsterrymag-2631746.jpg"
    },
    {
        name: "Quenn Sized Bed",
        price: "550,000",
        photo: "Images/Bedroom/pexels-jvdm-1454806.jpg"
    },
    {
        name: "Ceramic ",
        price: "300,000",
        photo: "Images/Bedroom/pexels-karolina-grabowska-4207788.jpg"
    },
]

const list1 = document.querySelector(".bedroom_list");
count = 1;

bedrooms.forEach((bedroom)=>{

    const my_link = document.createElement("a");
    const container = document.createElement("div");
    container.classList.add("dope_bedrooms");
 
    my_link.style.textDecoration = "none"
    
    const img = document.createElement("img");
    img.src = bedroom.photo;
    img.alt = bedroom.name;
    img.style.width = "100%";
    img.style.height = "300px";
    //img.style.transform = translate(4);

    const details = document.createElement("div");
    details.classList.add("bedroomDetails");

    const name = document.createElement("div");
    name.innerHTML = bedroom.name;
    name.classList.add("name");

    const price = document.createElement("div");
    price.innerHTML = `Price: ${bedroom.price}`;
    price.classList.add("price");

    details.appendChild(name);
    details.appendChild(price);
    container.appendChild(img);
    container.appendChild(details);
    list.appendChild(container);
    my_link.appendChild(container);
    my_link.href = `index${count}.html`;
   
    list1.appendChild(my_link);
    
  count+=1

})

const livings = [
    {
        name: "Gray Chair",
        price: "14M",
        photo: "Images/pexels-jonathanborba-3144581.jpg"
    },
    {
        name: "Family Dining Table Set",
        price: "13M",
        photo: "Images/pexels-kamo11235-667838.jpg"
    },
    {
        name: "Mercedes Benz",
        price: "19M",
        photo: "images/p3.jpg"
    },
    {
        name: "BMW",
        price: "20M",
        photo: "images/p4.jpg"
    },
    {
        name: "Ford",
        price: "21M",
        photo: "images/p5.jpg"
    },
    {
        name: "Rolls Royce",
        price: "63M",
        photo: "images/p6.jpg"
    },
]

const list2 = document.querySelector(".living_list");
count = 1;

livings.forEach((living)=>{

    const my_link = document.createElement("a");
    const container = document.createElement("div");
    container.classList.add("dope_livings");
 
    my_link.style.textDecoration = "none"
    
    const img = document.createElement("img");
    img.src = living.photo;
    img.alt = living.name;
    img.style.width = "100%";
    img.style.height = "300px";
    //img.style.transform = translate(4);

    const details = document.createElement("div");
    details.classList.add("livingDetails");

    const name = document.createElement("div");
    name.innerHTML = living.name;
    name.classList.add("name");

    const price = document.createElement("div");
    price.innerHTML = `Price: ${living.price}`;
    price.classList.add("price");

    details.appendChild(name);
    details.appendChild(price);
    container.appendChild(img);
    container.appendChild(details);
    list.appendChild(container);
    my_link.appendChild(container);
    my_link.href = `index${count}.html`;
   
    list2.appendChild(my_link);
    
  count+=1

})



const dinnings = [
    {
        name: "Gray Chair",
        price: "14M",
        photo: "Images/pexels-jonathanborba-3144581.jpg"
    },
    {
        name: "Family Dining Table Set",
        price: "13M",
        photo: "Images/pexels-kamo11235-667838.jpg"
    },
    {
        name: "Mercedes Benz",
        price: "19M",
        photo: "images/p3.jpg"
    },
    {
        name: "BMW",
        price: "20M",
        photo: "images/p4.jpg"
    },
    {
        name: "Ford",
        price: "21M",
        photo: "images/p5.jpg"
    },
    {
        name: "Rolls Royce",
        price: "63M",
        photo: "images/p6.jpg"
    },
]

const list3 = document.querySelector(".dinning_list");
count = 1;

dinnings.forEach((dinning)=>{

    const my_link = document.createElement("a");
    const container = document.createElement("div");
    container.classList.add("dope_dinnings");
 
    my_link.style.textDecoration = "none"
    
    const img = document.createElement("img");
    img.src = dinning.photo;
    img.alt = dinning.name;
    img.style.width = "100%";
    img.style.height = "300px";
    //img.style.transform = translate(4);

    const details = document.createElement("div");
    details.classList.add("dinningDetails");

    const name = document.createElement("div");
    name.innerHTML = dinning.name;
    name.classList.add("name");

    const price = document.createElement("div");
    price.innerHTML = `Price: ${dinning.price}`;
    price.classList.add("price");

    details.appendChild(name);
    details.appendChild(price);
    container.appendChild(img);
    container.appendChild(details);
    list.appendChild(container);
    my_link.appendChild(container);
    my_link.href = `index${count}.html`;
   
    list3.appendChild(my_link);
    
  count+=1

})


const offices = [
    {
        name: "Gray Chair",
        price: "14M",
        photo: "Images/pexels-jonathanborba-3144581.jpg"
    },
    {
        name: "Family Dining Table Set",
        price: "13M",
        photo: "Images/pexels-kamo11235-667838.jpg"
    },
    {
        name: "Mercedes Benz",
        price: "19M",
        photo: "images/p3.jpg"
    },
    {
        name: "BMW",
        price: "20M",
        photo: "images/p4.jpg"
    },
    {
        name: "Ford",
        price: "21M",
        photo: "images/p5.jpg"
    },
    {
        name: "Rolls Royce",
        price: "63M",
        photo: "images/p6.jpg"
    },
]

const list4 = document.querySelector(".office_list");
count = 1;

offices.forEach((office)=>{

    const my_link = document.createElement("a");
    const container = document.createElement("div");
    container.classList.add("dope_offices");
 
    my_link.style.textDecoration = "none"
    
    const img = document.createElement("img");
    img.src = office.photo;
    img.alt = office.name;
    img.style.width = "100%";
    img.style.height = "300px";
    //img.style.transform = translate(4);

    const details = document.createElement("div");
    details.classList.add("officeDetails");

    const name = document.createElement("div");
    name.innerHTML = office.name;
    name.classList.add("name");

    const price = document.createElement("div");
    price.innerHTML = `Price: ${office.price}`;
    price.classList.add("price");

    details.appendChild(name);
    details.appendChild(price);
    container.appendChild(img);
    container.appendChild(details);
    list.appendChild(container);
    my_link.appendChild(container);
    my_link.href = `index${count}.html`;
   
    list4.appendChild(my_link);
    
  count+=1

})



const outdoors = [
    {
        name: "Gray Chair",
        price: "14M",
        photo: "Images/pexels-jonathanborba-3144581.jpg"
    },
    {
        name: "Family Dining Table Set",
        price: "13M",
        photo: "Images/pexels-kamo11235-667838.jpg"
    },
    {
        name: "Mercedes Benz",
        price: "19M",
        photo: "images/p3.jpg"
    },
    {
        name: "BMW",
        price: "20M",
        photo: "images/p4.jpg"
    },
    {
        name: "Ford",
        price: "21M",
        photo: "images/p5.jpg"
    },
    {
        name: "Rolls Royce",
        price: "63M",
        photo: "images/p6.jpg"
    },
]

const list5 = document.querySelector(".outdoor_list");
count = 1;

outdoors.forEach((outdoor)=>{

    const my_link = document.createElement("a");
    const container = document.createElement("div");
    container.classList.add("dope_outdoors");
 
    my_link.style.textDecoration = "none"
    
    const img = document.createElement("img");
    img.src = outdoor.photo;
    img.alt = outdoor.name;
    img.style.width = "100%";
    img.style.height = "300px";
    //img.style.transform = translate(4);

    const details = document.createElement("div");
    details.classList.add("outdoorDetails");

    const name = document.createElement("div");
    name.innerHTML = outdoor.name;
    name.classList.add("name");

    const price = document.createElement("div");
    price.innerHTML = `Price: ${outdoor.price}`;
    price.classList.add("price");

    details.appendChild(name);
    details.appendChild(price);
    container.appendChild(img);
    container.appendChild(details);
    list.appendChild(container);
    my_link.appendChild(container);
    my_link.href = `index${count}.html`;
   
    list5.appendChild(my_link);
    
  count+=1

})
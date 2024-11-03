export const products = [
    {
        id: 1,
        name: 'Notebook Gamer 1',
        price: 799.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
<<<<<<< HEAD
        img: '/Ngamer/G1.webp',
=======
        img: './public/Ngamer/G1.webp',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'NGamer'
    },
    {
        id: 2,
        name: 'Notebook Gamer 2',
        price: 699.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 4,
<<<<<<< HEAD
        img: '/Ngamer/G2.png',
=======
        img: './public/Ngamer/G2.png',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'NGamer'
    },
    {
        id: 3,
        name: 'Notebook Gamer 3',
        price: 599.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 3,
<<<<<<< HEAD
        img: '/Ngamer/G3.jpg',
=======
        img: './public/Ngamer/G3.jpg',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'NGamer'
    },
    {
        id: 4,
        name: 'Notebook Gamer 4',
        price: 899.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 6,
<<<<<<< HEAD
        img: '/Ngamer/G4.jpg',
=======
        img: './public/Ngamer/G4.jpg',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'NGamer'
    },
    {
        id: 5,
        name: 'Notebook Gamer 5',
        price: 999.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 7,
<<<<<<< HEAD
        img: '/Ngamer/G5.jpg',
=======
        img: './public/Ngamer/G5.jpg',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'NGamer'
    },
    {
        id: 6,
        name: 'Monitor 1',
        price: 999.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
<<<<<<< HEAD
        img: '/Monitor_card/Mcard1.webp',
=======
        img: './public/Monitor_card/Mcard1.webp',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'Monitor',
    },
    {
        id: 7,
        name: 'Monitor 2',
        price: 999.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
<<<<<<< HEAD
        img: '/Monitor_card/Mcard1.webp',
=======
        img: './public/Monitor_card/Mcard1.webp',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'Monitor',
    },
    {
        id: 8,
        name: 'Monitor 3',
        price: 999.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
<<<<<<< HEAD
        img: '/Monitor_card/Mcard1.webp',
=======
        img: './public/Monitor_card/Mcard1.webp',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'Monitor',
    },
    {
        id: 9,
        name: 'Monitor 4',
        price: 999.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
<<<<<<< HEAD
        img: '/Monitor_card/Mcard1.webp',
=======
        img: './public/Monitor_card/Mcard1.webp',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'Monitor',
    },
    {
        id: 10,
        name: 'Monitor 5',
        price: 999.990,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 8,
<<<<<<< HEAD
        img: '/Monitor_card/Mcard1.webp',
=======
        img: './public/Monitor_card/Mcard1.webp',
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
        category: 'Monitor',
    },
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products)
        }, 3000);
    })
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};
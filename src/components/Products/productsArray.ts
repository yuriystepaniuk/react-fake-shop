export type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}



const productsArray: Product[] = [
    {
        id: 1,
        name: "Iphone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 64,
        price: 500,
        image:"images/iphone-blue.jpeg",
    },
    {
        id: 2,
        name: "Iphone Pro",
        description: "This is iphone Pro",
        type: "phone",
        capacity: 128,
        price: 700,
        image:"images/iphone-red.jpeg",
    },
    {
        id: 3,
        name: "Iphone XS max",
        description: "This is iphone XS max",
        type: "phone",
        capacity: 256,
        price: 900,
        image:"images/iphone-black.jpeg",
    },
    {
        id: 4,
        name: "Iphone 13 pro",
        description: "This is iphone 13 pro",
        type: "phone",
        capacity: 512,
        price: 1000,
        image:"images/iphone-green.jpeg",
    },
    {
        id: 5,
        name: "Iphone 7",
        description: "This is iphone 7",
        type: "phone",
        capacity: 64,
        price: 150,
        image:"images/iphone-purple.jpeg",
    },
    {
        id: 6,
        name: "Iphone 3Gs",
        description: "This is iphone 3Gs",
        type: "phone",
        capacity: 16,
        price: 40,
        image:"images/iphone-gold.jpeg",
    }
]

export const getProductsObject = (array:Product[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]: product
}), {})

export default productsArray
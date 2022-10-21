type Product = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}



const productsArray: Product[] = [
    {
        name: "Iphone X",
        description: "This is iphone X",
        type: "phone",
        capacity: 64,
        price: 500,
    },
    {
        name: "Iphone Pro",
        description: "This is iphone Pro",
        type: "phone",
        capacity: 128,
        price: 700,
    },
    {
        name: "Iphone XS max",
        description: "This is iphone XS max",
        type: "phone",
        capacity: 256,
        price: 900,
    },
    {
        name: "Iphone 13 pro",
        description: "This is iphone 13 pro",
        type: "phone",
        capacity: 512,
        price: 1000,
    },
    {
        name: "Iphone 7",
        description: "This is iphone 7",
        type: "phone",
        capacity: 64,
        price: 150,
    },
    {
        name: "Iphone 3Gs",
        description: "This is iphone 3Gs",
        type: "phone",
        capacity: 16,
        price: 40,
    }
]

export default productsArray
export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title:"iPhone 13 Pro",
        description: 'This is iPhone 12 Pro',
        capacity:"128",
        type:"phone",
        price:1000,
        image: '/images/iphone-black.jpeg',
    },
    {
        id: 2,
        title:"iPhone 12 Pro",
        description: 'This is iPhone 12 Pro',
        capacity:"128",
        type:"phone",
        price:1000,
        image: '/images/iphone-blue.webp',

    },
    {
        id: 3,
        title:"iPhone 14 Pro",
        description: 'This is iPhone 12 Pro',
        capacity:"128",
        type:"phone",
        price:1000,
        image: '/images/iphone-gold.webp',
    },
    {
        id: 4,
        title:"iPhone 12 Pro",
        description: 'This is iPhone 12 Pro',
        capacity:"128",
        type:"phone",
        price:1000,
        image: '/images/iphone-green.webp',
    },
    {
        id: 5,
        title:"iPhone 12 Pro",
        description: 'This is iPhone 12 Pro',
        capacity:"128",
        type:"phone",
        price:1000,
        image: '/images/iphone-purple.webp',
    },
    {
        id: 6,
        title:"iPhone 12 Pro",
        description: 'This is iPhone 12 Pro',
        capacity:"128",
        type:"phone",
        price:1000,
        image: '/images/iphone-silver.webp',
    }
   
    
]

export const getProductsObject = (array: Product[]) =>
    array.reduce((object, product) => ({
    ...object,
    [product.id]: product,
}), {})

export default productsArray
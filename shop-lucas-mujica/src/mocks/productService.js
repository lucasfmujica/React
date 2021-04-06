/* eslint-disable no-use-before-define */
export function getCategories() {
  const filteredCategories = productList
    .map((p) => p.category)
    .reduce(
      (newTempArr, el) =>
        newTempArr.includes(el) ? newTempArr : [...newTempArr, el],
      [],
    )

  return filteredCategories
}

export function getProducts(categoryId) {
  return categoryId !== undefined
    ? productList.filter((p) => p.category === categoryId)
    : productList
}

export function getProduct(itemId) {
  return itemId !== undefined
    ? productList.filter((p) => p.id === parseInt(itemId, 10))[0]
    : productList[0]
}

const productList = [
  {
    id: 1,
    name: 'iMac',
    category: 'Computers',
    description: 'PC de escritorio con todo lo que necesita para jugar',
    price: 345000,
    stock: 5,
    pictureUrl: '/images/computer.svg',
  },
  {
    id: 2,
    name: 'Samsung S21 Ultra',
    category: 'Phones',
    description: 'El mejor celular del año',
    price: 178000,
    stock: 5,
    pictureUrl: '/images/phone.svg',
  },
  {
    id: 3,
    name: 'Macbook Air',
    category: 'Computers',
    description: 'Notebook de última generación',
    price: 280000,
    stock: 5,
    pictureUrl: '/images/laptop.svg',
  },
  {
    id: 4,
    name: 'Tablet Noblex P40',
    category: 'Tablets',
    description: 'La mejor Tablet 10',
    price: 11000,
    stock: 5,
    pictureUrl: '/images/ipad.svg',
  },
  {
    id: 5,
    name: 'Phillips 29 Ultra Wide',
    category: 'Monitor',
    description: 'Monitor de última generación',
    price: 23000,
    stock: 5,
    pictureUrl: '/images/monitor1.svg',
  },
  {
    id: 6,
    name: 'Logitech Mouse Gamer',
    category: 'Mouse',
    description: 'Mouse Gamer',
    price: 3000,
    stock: 5,
    pictureUrl: '/images/mouse.svg',
  },
]

export default productList

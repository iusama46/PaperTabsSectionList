import {faker} from '@faker-js/faker';

export default mockData = [
  {
    title: faker.commerce.productName(),
    id: faker.string.uuid(),
    position: 1,
    data: Array(10)
      .fill(0)
      .map(_ => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price({min: 100, max: 200}),
        photos: faker.image.urlLoremFlickr({category: 'food'}),
      })),
    index: 0,
  },
  {
    title: faker.commerce.productName(),
    id: faker.string.uuid(),
    position: 1,
    data: Array(10)
      .fill(0)
      .map(_ => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price({min: 100, max: 200}),
        photos: faker.image.urlLoremFlickr({category: 'food'}),
      })),
    index: 1,
  },
  {
    title: faker.commerce.productName(),
    id: faker.string.uuid(),
    position: 1,
    data: Array(10)
      .fill(0)
      .map(_ => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price({min: 100, max: 200}),
        photos: faker.image.urlLoremFlickr({category: 'food'}),
      })),
    index: 2,
  },
  {
    title: faker.commerce.productName(),
    id: faker.string.uuid(),
    position: 1,
    data: Array(10)
      .fill(0)
      .map(_ => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price({min: 100, max: 200}),
        photos: faker.image.urlLoremFlickr({category: 'food'}),
      })),
    index: 3,
  },
  {
    title: faker.commerce.productName(),
    id: faker.string.uuid(),
    position: 1,
    data: Array(10)
      .fill(0)
      .map(_ => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price({min: 100, max: 200}),
        photos: faker.image.urlLoremFlickr({category: 'food'}),
      })),
    index: 4,
  },
  {
    title: faker.commerce.productName(),
    id: faker.string.uuid(),
    position: 1,
    data: Array(3)
      .fill(0)
      .map(_ => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price({min: 100, max: 200}),
      })),
    index: 5,
  },
  {
    title: faker.commerce.productName(),
    id: faker.string.uuid(),
    position: 1,
    data: Array(10)
      .fill(0)
      .map(_ => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price({min: 100, max: 200}),
        photos: faker.image.urlLoremFlickr({category: 'food'}),
      })),
    index: 6,
  },
];

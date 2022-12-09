

// Mock data to test frontend without backend

import { Account } from "../models/account.model";
import { Customer } from "../models/customer.model";
import { Order } from "../models/order.model";
import {Product} from "../models/product.model";
import { ShoppingCart } from "../models/shoppingcart.model";

export let mockProducts: Product [] = [
  {
    productId: 1,
    name: "Best coat Ever",
    category: "coat",
    description: "This is de best product ever ",
    orderCode: "12tm",
    stock:7,
    picture: "picture"
  },

  {
    productId: 2,
    name: "Best jewelry Ever",
    category: "jewelry",
    description: "This is de best product ever ",
    orderCode: "12tm",
    stock:7,
    picture: "picture"
  },

  {
    productId: 3,
    name: "Best shoes Ever",
    category: "shoes",
    description: "This is de best product ever ",
    orderCode: "12tm",
    stock:7,
    picture: "picture"
  },
  ];

export let mockAccount: Account [] = [
  
  {
    accountId: 1,
    name: "Jan",
    email: "jantest@hotmail.com",
    password: "admin"
  },

  {
    accountId: 2,
    name: "peter",
    email: "petertest@hotmail.com",
    password: "admin"
  },

  {
    accountId: 3,
    name: "Dave",
    email: "davetest@hotmail.com",
    password: "admin"
  }



];

export let mockCustomer: Customer [] = [
  {
    customerId: 1,
    customerName: "Jan",
    adress: "Laan 2 5611 AE Eindhoven"
  },

  {
    customerId: 2,
    customerName: "Peter",
    adress: "Kade 18B 3333 BB Rotterdam"
  },

  {
    customerId: 3,
    customerName: "Dave",
    adress: " 18B 2021 CF Amsterdam"
  }
];

export let  mockOrder: Order [] = [

  {
    orderId: 1,
    orderDate: "09-11-2022",
    customerId: 1,
    orderAmount: 150.75
  },

  {
    orderId: 2,
    orderDate: "10-5-2022",
    customerId: 2,
    orderAmount: 500
  },

  {
    orderId: 3,
    orderDate: "10-5-2022",
    customerId: 2,
    orderAmount: 30.90
  },


];

export let mockShoppingCart: ShoppingCart [] = [
  {
    shoppingCartId: 1,
    date: "10-5-2022",
    totalPrice: 100,
    products: [{
      productId: 1,
      name: "Best product Ever",
      category: "shoes",
      description: "This is de best product ever ",
      orderCode: "12tm",
      stock:7,
      picture: "picture"
    },],
  }
];
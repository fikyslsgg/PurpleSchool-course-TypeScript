const axios = require('axios').default;

type Gender = 'male' | 'female'

interface Hair {
  color: string
  type: string
}

interface Coordinates {
  lat: number
  lng: number
}

interface Address {
  address: string
  city: string
  coordinates: Coordinates
  postalCode: string
  state: string
}

interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

interface Company {
  address: Address
  department: string
  name: string
  title: string
}

interface Response {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: Gender
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  domain: string
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
}

axios.get('https://dummyjson.com/users')
  .then(function (response: unknown) {
    if (response instanceof Response) {
      console.log(response);
    }
  })
  .catch(function (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  });








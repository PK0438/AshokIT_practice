import { IRandomUser } from "../models/IRandomUserData";

export class RandomUserService {
    private static usersData:IRandomUser = {
        results: [
          {
            gender: "male",
            name: {
              title: "Monsieur",
              first: "Dino",
              last: "Dufour"
            },
            location: {
              street: {
                number: 1226,
                name: "Rue des Jardins"
              },
              city: "Siglistorf",
              state: "Appenzell Innerrhoden",
              country: "Switzerland",
              postcode: 6239,
              coordinates: {
                latitude: "-57.3941",
                longitude: "-22.6827"
              },
              timezone: {
                offset: "+3:30",
                description: "Tehran"
              }
            },
            email: "dino.dufour@example.com",
            login: {
              uuid: "3391bc1f-770b-42c9-ae7e-966f9d99bea4",
              username: "heavytiger658",
              password: "toaster",
              salt: "CEdSkWKk",
              md5: "e388fa721b05c12c90e90018d412117b",
              sha1: "3fd992574847273966400824257fd674a6189e0a",
              sha256: "db80a123d780cc184919319537f41ced3ed1153e67d80ea6d4ff63f7ee03e1ac"
            },
            dob: {
              date: "1969-02-27T12:51:21.047Z",
              age: 54
            },
            registered: {
              date: "2010-09-21T06:41:01.414Z",
              age: 12
            },
            phone: "079 557 96 27",
            cell: "076 399 13 06",
            id: {
              name: "AVS",
              value: "756.2776.8580.83"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/98.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
            },
            nat: "CH"
          }
        ],
        info: {
          seed: "06bd3c2fbc6d28bd",
          results: 1,
          page: 1,
          version: "1.4"
        }
      }
    
}
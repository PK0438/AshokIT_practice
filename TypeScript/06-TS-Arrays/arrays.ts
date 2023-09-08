import { IUser } from "../05-TS-Objects/objects";

const users: IUser[] = [{
    results: [
      {
        gender: "female",
        name: {
          title: "Miss",
          first: "Samantha",
          last: "Clark"
        },
        location: {
          street: {
            number: 7038,
            name: "Oak Lawn Ave"
          },
          city: "Midland",
          state: "Oregon",
          country: "United States",
          postcode: 73100,
          coordinates: {
            latitude: "85.1547",
            longitude: "179.2735"
          },
          timezone: {
            offset: "-7:00",
            description: "Mountain Time (US & Canada)"
          }
        },
        email: "samantha.clark@example.com",
        login: {
          uuid: "d203b98b-b4b9-4e34-a8dd-c86bcfc52126",
          username: "tinyrabbit604",
          password: "spanky",
          salt: "qSM6orjF",
          md5: "0e14438383b7c5f3999d0fc3a6f39930",
          sha1: "93a2da8c72c29af7c101ef87a1d11255602ada4d",
          sha256: "ecd15e1890513008233605c763180fef86242f81bcafdd7e18f912b7bd14907f"
        },
        dob: {
          date: "1967-01-14T20:32:18.391Z",
          age: 56
        },
        registered: {
          date: "2017-01-26T13:14:58.953Z",
          age: 6
        },
        phone: "(973) 311-4938",
        cell: "(953) 914-2064",
        id: {
          name: "SSN",
          value: "423-67-4258"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/74.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg"
        },
        nat: "US"
      }
    ],
    info: {
      seed: "99c840de84b8f0d9",
      results: 1,
      page: 1,
      version: "1.4"
    }
  }]
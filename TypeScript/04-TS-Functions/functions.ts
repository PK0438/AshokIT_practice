import {IUser} from "../05-TS-Objects/objects";


let greet = ():string => {                          //Here the string type is the type of the return statement
    console.log("Good morning");
    return "";                                      //Stating the return type is not mandatory. 
};

let greet1 = ():void => {                           //If there is no return specified in the function the returnn type would be void.  It's only used for functions.
    console.log("Good afternoon");   
}

//function with parameters

export let wishMsg = (name:string):string => {
    let result:string = `Good morning Mr.${name}`;
    return result;
}
console.log(wishMsg("John"));

//functions with Objects
interface Mobiles {
    brandName : string;
    price     : number;
    modelNo   : string;
}

let printMobile = (mobile:Mobiles) => {
    let msg:string = `I have a mobile from ${mobile.brandName} which costs ${mobile.price} and it's model is ${mobile.modelNo}` 
    console.log(msg);
}

const firstMobile:Mobiles = {
    "brandName" :"Apple",
    "price":10000,
    "modelNo":"A23456789"
}

printMobile(firstMobile);

//One more example

interface Students {
    name: string;
    age: number;
    section: string;
}

let studentDetails = (student:Students):void => {
 let studentInfo:string = `${student.name} is ${student.age} years old and is belongs to the section ${student.section}`;
 console.log(studentInfo);
}

const student1:Students = {
    'name': 'John',
    'age'  : 20,
    'section':'BTech CSE'
}

studentDetails(student1);

const userDetails : IUser = {
    results: [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Marco",
          last: "Domínguez"
        },
        location: {
          street: {
            number: 6454,
            name: "Calle de Ferraz"
          },
          city: "Toledo",
          state: "La Rioja",
          country: "Spain",
          postcode: 74976,
          coordinates: {
            latitude: "-35.8145",
            longitude: "-75.1956"
          },
          timezone: {
            offset: "+10:00",
            description: "Eastern Australia, Guam, Vladivostok"
          }
        },
        email: "marco.dominguez@example.com",
        login: {
          uuid: "b3fa7dbb-d5ba-4f59-be91-261f2a7faa1f",
          username: "organiccat213",
          password: "thankyou",
          salt: "2wRP8wKE",
          md5: "5860415dc6ffe4e187f7e1e130f84d66",
          sha1: "13c243f65eda55d464b9ef29f84013530433203a",
          sha256: "7cda49398edb4564cb8b147c3bcbdb2d9b1167de5e2810867ca0db9d207947f6"
        },
        dob: {
          date: "1968-08-17T19:33:32.292Z",
          age: 55
        },
        registered: {
          date: "2003-09-26T16:04:42.533Z",
          age: 19
        },
        phone: "916-496-609",
        cell: "622-504-392",
        id: {
          name: "DNI",
          value: "60142988-G"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/98.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
        },
        nat: "ES"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Oskar",
          last: "Nymo"
        },
        location: {
          street: {
            number: 7337,
            name: "Solfjellshøgda"
          },
          city: "Slåttevik",
          state: "Vestfold",
          country: "Norway",
          postcode: "2640",
          coordinates: {
            latitude: "-44.0591",
            longitude: "-93.6602"
          },
          timezone: {
            offset: "+5:30",
            description: "Bombay, Calcutta, Madras, New Delhi"
          }
        },
        email: "oskar.nymo@example.com",
        login: {
          uuid: "8075f3a0-273e-4dd3-b2b9-bbcbf69d7b2d",
          username: "organicduck175",
          password: "1960",
          salt: "L2CTl2Du",
          md5: "ff11219ff280f7843a3ec35902a97f6c",
          sha1: "b500839fe5e6277a6b6347d74354d69f2f0a34d7",
          sha256: "3d011a958c907601016ed06018f9a73cfdb39cad2bddf4451dcadf2518f3b97e"
        },
        dob: {
          date: "1946-07-21T21:30:54.192Z",
          age: 77
        },
        registered: {
          date: "2020-03-30T16:20:27.796Z",
          age: 3
        },
        phone: "33409843",
        cell: "90633264",
        id: {
          name: "FN",
          value: "21074605955"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/40.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg"
        },
        nat: "NO"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Miguel",
          last: "Román"
        },
        location: {
          street: {
            number: 9747,
            name: "Paseo de Zorrilla"
          },
          city: "Parla",
          state: "La Rioja",
          country: "Spain",
          postcode: 55922,
          coordinates: {
            latitude: "-4.5154",
            longitude: "-58.4865"
          },
          timezone: {
            offset: "+3:00",
            description: "Baghdad, Riyadh, Moscow, St. Petersburg"
          }
        },
        email: "miguel.roman@example.com",
        login: {
          uuid: "09310e64-470e-4e75-91b5-6497e456cc8f",
          username: "orangeladybug503",
          password: "1414",
          salt: "4ec8LPPZ",
          md5: "957fa0f69475fd00e325cbce28476156",
          sha1: "c495454557088f584b1c86c94334bfb45e8afac9",
          sha256: "e72bfaa7bf13a0117a761d9e92cff78f716772bb10b751f3cb8ea8a81cf17f10"
        },
        dob: {
          date: "1945-09-07T05:23:57.732Z",
          age: 78
        },
        registered: {
          date: "2016-09-17T19:26:18.442Z",
          age: 6
        },
        phone: "923-537-790",
        cell: "614-256-451",
        id: {
          name: "DNI",
          value: "93852753-C"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/14.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg"
        },
        nat: "ES"
      },
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Joaquin",
          last: "Lorenzo"
        },
        location: {
          street: {
            number: 6379,
            name: "Calle de Téllez"
          },
          city: "La Palma",
          state: "Islas Baleares",
          country: "Spain",
          postcode: 82352,
          coordinates: {
            latitude: "83.6415",
            longitude: "62.4823"
          },
          timezone: {
            offset: "-12:00",
            description: "Eniwetok, Kwajalein"
          }
        },
        email: "joaquin.lorenzo@example.com",
        login: {
          uuid: "c8e10f9a-ad08-4770-b234-96cbe11738a7",
          username: "bigsnake172",
          password: "hampton",
          salt: "68ew13X2",
          md5: "9065d7ec732a3db3442269489fb13945",
          sha1: "237f5616a78e0c0e9d8777037324943f0ae1bfe4",
          sha256: "a00c11f4cffa3de0daab489801337cf92c287de7f345ab08dc35fbf1fd5b4379"
        },
        dob: {
          date: "1971-08-18T17:40:58.360Z",
          age: 52
        },
        registered: {
          date: "2005-11-10T09:00:05.898Z",
          age: 17
        },
        phone: "905-986-092",
        cell: "681-327-773",
        id: {
          name: "DNI",
          value: "13083780-F"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/24.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg"
        },
        nat: "ES"
      },
      {
        gender: "female",
        name: {
          title: "Miss",
          first: "Barb",
          last: "Fitzpatrick"
        },
        location: {
          street: {
            number: 3506,
            name: "Rochestown Road"
          },
          city: "Portarlington",
          state: "Wexford",
          country: "Ireland",
          postcode: 33477,
          coordinates: {
            latitude: "10.4195",
            longitude: "-116.0844"
          },
          timezone: {
            offset: "+5:00",
            description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
          }
        },
        email: "barb.fitzpatrick@example.com",
        login: {
          uuid: "e5d84c86-1469-470a-b6bc-ef15decd61c1",
          username: "brownkoala933",
          password: "ellie",
          salt: "JMqobf4r",
          md5: "501dc1deb2cfc1c76b8c2870e4fa3d63",
          sha1: "ee1136086c54744f119d16ea87344d923fb1dbd5",
          sha256: "cd1168116eed19a827232a34834682aecdf17395ab66f4f100553b022743b47e"
        },
        dob: {
          date: "1949-01-26T20:19:14.124Z",
          age: 74
        },
        registered: {
          date: "2013-11-24T16:00:48.690Z",
          age: 9
        },
        phone: "031-153-5101",
        cell: "081-754-9529",
        id: {
          name: "PPS",
          value: "9368961T"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/24.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg"
        },
        nat: "IE"
      }
    ],
    info: {
      seed: "9a8df696861093c8",
      results: 5,
      page: 1,
      version: "1.4"
    }
  }

  console.log(userDetails);
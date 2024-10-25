
contactDetails.petname
contactDetails.phoneNo.office
contactDetails.phoneNo.persnl[1]
contactDetails.address.persnl.stateInfo.code

var contactDetails = {
    fname : "Asmit",
    lname : "Patil",
    petname : "Moti",
    phoneNo : {
        office : '040-234235',
        persnl : [8454838345, 9022511810]
    },
    address : {
        office: {
            bulidingNo : '5A',
            country : {
                code : 'IND',
                name : "India"
            },
            stateName : "Maharastra"
        },
        persnl: {
            hNo : '56-1/A',
            stateInfo:{
                code: 'MH',
                number: '02',
                name: 'Maharashtra',
            },
            streetname: 'ashoknagar' 
        }
    },
    maildid: {
        office: 'office@office.com',
        persnl: ['abc@gmail.com, avsad@gmail.com'],
    },
    profilepic : 'abc.png',
    socialid: {
        twitter: 'abc',
        linkedin: 'test',
        fb : 'sample'
    },
    dob: {
        date : 9,
        month : 1,
        year : 2001
    },
}
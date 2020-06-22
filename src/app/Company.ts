export class Company {

    id: number;
    comanyName: string;
    addby:number;
    startDate: Date;
    endDate: Date; 
    e_position: string;
    retrievedImage: string;
    picByte: string;  
    username: string;

    user : {
        id: string;

    }

    /*constructor(id: number, companyName: string, addby:number,StartDate:Date, EndDate: Date, e_position: string,
        retrievedImage: string, picByte:string, username:string)
        {
            this.id = id;
            this.comanyName = companyName;
            this.addby = addby;
            this.StartDate = StartDate;
            this.EndDate = EndDate;
            this.e_position = e_position;
            this.retrievedImage = retrievedImage;
            this.picByte = picByte;
            this.username = username;
        }*/

    }
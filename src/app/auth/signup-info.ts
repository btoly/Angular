

export class SignUpInfo {
id:number;
name: string;
username: string;
email: string;
role: string[];
password: string;
roles: any[];


last_name: string;
father_Name: string;
grandfather_name: string;
phone:number;
select_role:string;




constructor(name: string, username: string, email: string, password: string , 
father_Name:  string ,grandfather_name:  string , last_name:  string ,
 phone:number,select_role:string) {
this.name = name;
this.username = username;
this.email = email;
this.password = password;


this.father_Name=father_Name;
this.grandfather_name=grandfather_name;
this.last_name=last_name;
this.phone=phone;

if(select_role=="pm")
this.role = ['pm'];
else
if(select_role=="user")
this.role = ['user'];
else
if(select_role=="admin")
this.role = ['admin'];
else
if(select_role=="company")
this.role = ['company'];
else
this.role = ['user'];



}



}

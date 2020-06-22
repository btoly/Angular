import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpInfo } from '../auth/signup-info';
import { Profile } from 'src/Profile';
import { Certification } from '../Certification';
import { Company } from '../Company';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient:HttpClient) { 
  }

     getUsers()
  {

    return this.httpClient.get<SignUpInfo[]>('http://localhost:8080/api/auth/get');
  }

  deleteUser(id) {
    return this.httpClient.delete<SignUpInfo>('http://localhost:8080/api/auth/users/'+ id);
  }

  getProfile() {
    return this.httpClient.get<Profile[]>('http://localhost:8080/api/auth/Getimages');
  }
  deleteProfile(id) {

    return this.httpClient.delete<Profile>('http://localhost:8080/api/auth/' + id);
  }
  updateProfile(updatedProfile: Profile) {
    return this.httpClient.put<Profile>('http://localhost:8080/api/auth/update', updatedProfile);
  }


  addProfile(newProfile: Profile) {
    return this.httpClient.post<Profile>('http://localhost:8080/api/auth/add', newProfile);
  }

//////////////////Certification///////////////


  addCertification(newProfile: Certification) {
    return this.httpClient.post<Certification>('http://localhost:8080/api/auth/addCertivcte', newProfile);
  }
  
 

  deleteCertification(id) {

    return this.httpClient.delete<Certification>('http://localhost:8080/api/auth/deleteCertificationn/' + id);
  }
  updateCertification(updatedCertification: Certification) {
    return this.httpClient.put<Certification>('http://localhost:8080/api/auth/updateCertification', updatedCertification);
  }
  getCertificateDetailsForUser()
  {
    return this.httpClient.get('http://localhost:8080/api/auth/getCertificate/userId/'+sessionStorage.getItem('AuthUsername'));
  }


///////////////////ForgotPawword/////////////

  getUserById(id) : Promise<any> {
    return this.httpClient
    .get('http://localhost:8080/api/auth/User/'+ id)
              .toPromise()
              .then(this.handleSuccess)
              .catch(this.handleError);
  }


  private handleSuccess(successResponse): Promise<any> {
    return Promise.resolve(successResponse);
  }

  private handleError(errorResponse): Promise<any> {
    return Promise.reject(errorResponse);
  }


  addUploadData(selectedFile) {
    return this.httpClient.post('http://localhost:8080/api/auth/update', selectedFile);
  }
  


  processForgotPasswordForm(email:String)
  {
     return this.httpClient.post('http://localhost:8080/api/auth/Password/forgot?email='+email, {});
  }

  resetUserPassword(password, token)
  {
    return this.httpClient.post('http://localhost:8080/api/auth/Password/reset?token='+token+'&password='+password, {});
  }



  /////////////////////////////////////////Company////////////////////////////////

 

  getCompanyByUserIdAndAddBy() {
    return this.httpClient.get('http://localhost:8080/api/auth/Company/getCompany/addBy/'+sessionStorage.getItem('AuthUsername'));
  }

  getCompanyByUserIdDetailsForUser()
  {
    return this.httpClient.get('http://localhost:8080/api/auth/Company/getCompany/userId/'+sessionStorage.getItem('AuthUsername'));
  }

  getCompany() {
    return this.httpClient.get<Company[]>('http://localhost:8080/api/auth/Company/GetCompany');
  }

  createaddCpmpany(newCompany: Company) {
    return this.httpClient.post<Company>('http://localhost:8080/api/auth/Company/addCpmpany', newCompany);
  }
  
 
  updateCpmpany(updatedCompany: Company) {
    return this.httpClient.put<Company>('http://localhost:8080/api/auth/Company/updateCpmpany', updatedCompany);
  }

  deleteCompany(id) {

    return this.httpClient.delete<Company>('http://localhost:8080/api/auth/Company/deleteCompany/' + id);

  }


  getcompanyByusername(username){

    return this.httpClient.get<Company>('http://localhost:8080/api/auth/Company/userCompany/' + username);
  }


  getccertificationyusername(username){

    return this.httpClient.get<Certification>('http://localhost:8080/api/auth/usercertificationR/' + username);
  }
  getCertification() {
    return this.httpClient.get<Certification[]>('http://localhost:8080/api/auth/GetCertification');
  }

  getCertificationAddBy() {
    return this.httpClient.get('http://localhost:8080/api/auth/getCertificate/addBy/'+sessionStorage.getItem('AuthUsername'));
  }

  updateUser(updateduser: SignUpInfo) {
    return this.httpClient.put<SignUpInfo>('http://localhost:8080/api/auth/updateUser', updateduser);
  }




}
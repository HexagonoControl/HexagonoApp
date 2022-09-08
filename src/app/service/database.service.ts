import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Question } from '../models/questions';
import { subCategory } from '../models/subCategory';
import { Users } from '../models/users';
import { Respuestas } from '../models/respuestas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  consulta: any;
  headers = new HttpHeaders()
  .set("X-CustomHeader", "custom header value");

  constructor(private http:HttpClient) {

   }
  baseUrl = environment.baseUrl


  questionRegister(respuesta){
    return this.http.post(`${this.baseUrl}/registerQuestion.php`, respuesta, );
    }

    requestRegister(respuesta, id_user){
      let headers = new HttpHeaders()
      headers=headers.set('Content-Type','application/json; charset=utf-8')
      headers=headers.set('Access-Control-Allow-Origin', '*');
      return this.http.post(`${this.baseUrl}/registerRequest.php?id_user=${id_user}`, respuesta, {'headers':headers} );  
    }

    requestRegister1(respuesta, id_user){
      let headers = new HttpHeaders()
      headers=headers.set('Content-Type','application/json; charset=utf-8')
      headers=headers.set('Access-Control-Allow-Origin', '*');
      return this.http.post(`${this.baseUrl}/registerRequest1.php?id_user=${id_user}`, respuesta, {'headers':headers} );  
    }
 
    getUserid(id_user: string | number) {
      return this.http.get(`${this.baseUrl}/getidUser.php?idUser=${id_user}`);
    }

    getUseridD(id_user: string | number) {
      return this.http.post<Users[]>(this.baseUrl +'/getidUserD.php', {id_user});
    }
 
    getSubcategory(){
   return this.http.get<subCategory[]>(`${this.baseUrl}/getSubcategory.php`);
     }

     getRespuestasId(id_user,id_subcategory){
      let headers = new HttpHeaders()
      headers=headers.set('Content-Type','application/json; charset=utf-8')
      headers=headers.set('Access-Control-Allow-Origin', '*');
      return this.http.post<any[]>(this.baseUrl +'/getRespuestaId.php',{id_user,id_subcategory }, {'headers':headers} );
        }

     getQuestion(){
      return this.http.get<Question[]>(`${this.baseUrl}/getQuestion.php`);
    } 
     getQuestion1(){
    return this.http.get<Question[]>(`${this.baseUrl}/getQuestion1.php`);
  } 
  
  getQuestion2(){
    return this.http.get<Question[]>(`${this.baseUrl}/getQuestion2.php`);
  } 

  getQuestion3(){
    return this.http.get<Question[]>(`${this.baseUrl}/getQuestion3.php`);
  }
  getQuestion4(){
    return this.http.get<Question[]>(`${this.baseUrl}/getQuestion4.php`);
  }  
  getQuestion5(){
    return this.http.get<Question[]>(`${this.baseUrl}/getQuestion5.php`);
  }  
  getQuestion6(){
    return this.http.get<Question[]>(`${this.baseUrl}/getQuestion6.php`);
  }  
  getQuestion7(){
    return this.http.get<Question[]>(`${this.baseUrl}/getQuestion7.php`);
  }    
    

  
  getRequest1(id_user: string | number) {
    return this.http.get<any>(`${this.baseUrl}/getRequestid1.php?idUser=${id_user}`);
  }


  updateQuestion(respuesta:any){
    return this.http.put(`${this.baseUrl}/updateStateQ.php`, respuesta);
  }

  updateUser1(respuesta){
       return this.http.put(`${this.baseUrl}/updateUser1.php`, respuesta, { ...Option, responseType: 'text' });
   }


   getIndicador1(id_user,id_subcategory){
    let headers = new HttpHeaders()
    headers=headers.set('Content-Type','application/json; charset=utf-8')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post<any[]>(this.baseUrl +'/getIndicador1.php',{id_user,id_subcategory }, {'headers':headers} );
      }

  getDiagnostico1(id_user){
  let headers = new HttpHeaders()
  headers=headers.set('Content-Type','application/json; charset=utf-8')
  headers=headers.set('Access-Control-Allow-Origin', '*');
  return this.http.post<any[]>(this.baseUrl +'/diagnosticoGeneral.php',{id_user }, {'headers':headers} );
   }

   getDiagnostico2(id_user){
    let headers = new HttpHeaders()
    headers=headers.set('Content-Type','application/json; charset=utf-8')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post<any[]>(this.baseUrl +'/diagnosticoGeneral2.php',{id_user }, {'headers':headers} );
     }

     getDiagnostico3(id_user){
      let headers = new HttpHeaders()
      headers=headers.set('Content-Type','application/json; charset=utf-8')
      headers=headers.set('Access-Control-Allow-Origin', '*');
      return this.http.post<any[]>(this.baseUrl +'/diagnosticoGeneral3.php',{id_user }, {'headers':headers} );
       }
  
       getDiagnostico4(id_user){
        let headers = new HttpHeaders()
        headers=headers.set('Content-Type','application/json; charset=utf-8')
        headers=headers.set('Access-Control-Allow-Origin', '*');
        return this.http.post<any[]>(this.baseUrl +'/diagnosticoGeneral4.php',{id_user }, {'headers':headers} );
         }

     getDiagnostico5(id_user){
    let headers = new HttpHeaders()
    headers=headers.set('Content-Type','application/json; charset=utf-8')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post<any[]>(this.baseUrl +'/diagnosticoGeneral5.php',{id_user }, {'headers':headers} );
     }

     getDiagnostico6(id_user){
      let headers = new HttpHeaders()
      headers=headers.set('Content-Type','application/json; charset=utf-8')
      headers=headers.set('Access-Control-Allow-Origin', '*');
      return this.http.post<any[]>(this.baseUrl +'/diagnosticoGeneral6.php',{id_user }, {'headers':headers} );
       }

  getSumatotal(id_user: string | number){
    let headers = new HttpHeaders()
    headers=headers.set('Content-Type','application/json; charset=utf-8')
    headers=headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post<any[]>(this.baseUrl +'/getSumatotal.php',{id_user }, {'headers':headers} );
   
  }

  getUsersAll(){
    return this.http.get<Question[]>(`${this.baseUrl}/getAllusers.php`);
  } 
  
  
}



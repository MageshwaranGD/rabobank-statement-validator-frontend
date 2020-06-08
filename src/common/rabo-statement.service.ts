import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {HOST_NAME} from './constants'


@Injectable({
  providedIn: 'root'
})
export class RaboStatementService {

  url:string=HOST_NAME+'/rabobank/statementprocessor'
  constructor(private http:HttpClient) { }

  validateJson():Observable<any>{
    // let options={headers:new HttpHeaders(header)}
    return this.http.post(this.url,body).pipe(catchError(this.handleError))
  }
  private handleError(error:HttpErrorResponse){
    let errMsg:string='';
   if(error.error){
      errMsg=error.message;  
    }else{
      console.log(error.status)
   }
    return throwError(error)
  }
}
export const body=[
  {
    "Reference": 194261,
    "AccountNumber": "NL91RABO0315273637",
    "Description": "Clothes from Jan Bakker",
    "Start Balance": 21.6,
    "Mutation": -41.83,
    "End Balance": -20.23
  },
  {
    "Reference": 112806,
    "AccountNumber": "NL27SNSB0917829871",
    "Description": "Clothes for Willem Dekker",
    "Start Balance": 91.23,
    "Mutation": "+15.57",
    "End Balance": 106.8
  },
  {
    "Reference": 183049,
    "AccountNumber": "NL69ABNA0433647324",
    "Description": "Clothes for Jan King",
    "Start Balance": 86.66,
    "Mutation": "+44.5",
    "End Balance": 131.16
  },
  {
    "Reference": 183356,
    "AccountNumber": "NL74ABNA0248990274",
    "Description": "Subscription for Peter de Vries",
    "Start Balance": 9.98,
    "Mutation": -46.65,
    "End Balance": 46.33
  },
  {
    "Reference": 112806,
    "AccountNumber": "NL69ABNA0433647324",
    "Description": "Clothes for Richard de Vries",
    "Start Balance": 90.83,
    "Mutation": -1.91,
    "End Balance": 79.92
  },
  {
    "Reference": 141223,
    "AccountNumber": "NL93ABNA0585619023",
    "Description": "Clothes from Erik Bakker",
    "Start Balance": 94.25,
    "Mutation": "+41.6",
    "End Balance": 135.85
  },
  {
    "Reference": 141223,
    "AccountNumber": "NL93ABNA0585619023",
    "Description": "Clothes from Erik Bakker",
    "Start Balance": 94.25,
    "Mutation": "+41.6",
    "End Balance": 135.85
  },
  {
    "Reference": 195446,
    "AccountNumber": "NL74ABNA0248990274",
    "Description": "Flowers for Willem Dekker",
    "Start Balance": 26.32,
    "Mutation": "+48.98",
    "End Balance": 75.3
  }
]

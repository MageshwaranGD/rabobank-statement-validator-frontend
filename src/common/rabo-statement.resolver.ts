import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import {RaboStatementService} from './rabo-statement.service'
import { map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of, EMPTY} from 'rxjs';


@Injectable({
    providedIn: 'root'
    })
export class StatementResolver implements Resolve<any>{

    constructor(private router:Router,private raboStatementService:RaboStatementService){}
    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot)
    {
        return this.raboStatementService.validateJson().pipe(map(data=>data),catchError(error=>{
            if(error.statusText=="OK"){
                return of ({error:error})
            }else{
               this.router.navigate(["/error"])
               return EMPTY
            }
            })) 
    }
        
}
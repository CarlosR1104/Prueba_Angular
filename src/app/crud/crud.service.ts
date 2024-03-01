import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, take, tap, throwError } from 'rxjs';
import { Crud } from './crud';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CrudService {
    //http: HttpClient;
    // crud: Crud[];
    constructor(private http:HttpClient) { }

    getCruds():Observable<Crud[]>{
        console.log('entro a gt cruds')
        // console.log(this.http.get<Crud[]>('https://jsonplaceholder.typicode.com/posts'))
        return this.http.get<Crud[]>('https://jsonplaceholder.typicode.com/posts').pipe(
            take(5),
            tap(response => console.log('Respuesta completa:', response)),
            catchError((error: any) => {
                console.error('Error en la solicitud HTTP:', error);
                return throwError('Error en la solicitud HTTP');
            })
        )
    }

    updateCrud(crud:Crud){
        fetch('https://jsonplaceholder.typicode.com/posts/'+crud.id, {
        method: 'PUT',
        body: JSON.stringify({
        title: crud.title,
        body: crud.body,
        userId: crud.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    deleteCrud(id:number):Observable<Crud[]>{
        console.log('be',id)
        return this.http.delete<Crud[]>('https://jsonplaceholder.typicode.com/posts/'+id);
        // fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
        // method: 'DELETE',
    }

    searchCrud(id:number){
        console.log('id desde servicio',id)
        return this.http.get<Crud[]>('https://jsonplaceholder.typicode.com/posts?userId='+id);
        // fetch('https://jsonplaceholder.typicode.com/posts?userId='+id,)
        // .then((response) => response.json())
        // .then((json) => console.log(json));
    }

    searchOneCrud(id:number){
        console.log('id desde servicio',id)
        return this.http.get<Crud>('https://jsonplaceholder.typicode.com/posts/'+id);
    }
    SaveCrud(crud:Crud){
        console.log('agrego', crud)
        // return this.http.post<Crud[]>('https://jsonplaceholder.typicode.com/posts/', crud);
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: crud.title,
        body: crud.body,
        userId: crud.userId,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
}







// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
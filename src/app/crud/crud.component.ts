import { Component, OnInit, Input } from "@angular/core";
import { CrudService } from "./crud.service";
import { Crud } from "./crud";
import { take, tap } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit{
    public newcrud:Crud=new Crud();
    public id:number;
    @Input()
    public cruds:Crud[];
    constructor(private crudService:CrudService){}
    
    ngOnInit(){
        if (this.crudService) {
        
            this.crudService.getCruds().pipe(
                take(5),
                tap({
                    next: cruds => console.log('Emisión:', cruds),
                    complete: () => console.log('La suscripción se ha completado.')
                })
                ).subscribe(cruds => {
                    this.cruds = cruds;
        });
        }else {
            console.error('crudService no está definido');
        }
        
    };
        // this.crudService.getCruds().subscribe(cruds=>{
        //     this.cruds=cruds;
        //     console.log('hola crud',cruds)
        // })

    deleteCrud(id:number){
        console.log('entro a borrar', id)
        this.crudService.deleteCrud(id).subscribe(response=> {
            alert("Se elimino el producto");
            this.ngOnInit();
        });
    }

    searchCrud(){
        if (this.id) {
            console.log('entro a buscar',this.id)
            this.crudService.searchCrud(this.id).subscribe(cruds=> {
                this.cruds = cruds;
                console.log('los q encontreee', cruds);
            });
        } else {
            this.ngOnInit();
        }
    }

    // redireccionar(): void {
    //     this.router.navigate(['/form/Update']);
    // }
}
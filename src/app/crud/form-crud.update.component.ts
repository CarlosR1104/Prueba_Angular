import { Component, Input, OnInit } from "@angular/core";
import { Crud } from "./crud";
import { CrudService } from "./crud.service";
import { take, tap } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-crud-update-form',
    templateUrl: './form-crud.update.component.html',
    styleUrls: ['./crud.component.css']
})

export class FormCrudUpdateComponent implements OnInit{
    public crud:Crud=new Crud();
    id:Number;
    constructor(private crudService:CrudService,private router: ActivatedRoute){}

    ngOnInit() {
        this.router.params.subscribe(params => {
        this.id = params['id'];
        console.log('id de actualizar', params['id'])
        this.crudService.searchOneCrud(params['id']).subscribe(cruds => {
            this.crud = cruds;
            console.log('lo q encontre',cruds)
        });
        });
    }

    updateCrud(){
        console.log('update a',this.crud)
        this.crudService.updateCrud(this.crud)
        alert("Se actualizo con exito")
    }
}
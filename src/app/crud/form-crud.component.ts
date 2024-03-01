import { Component, Input, OnInit } from "@angular/core";
import { Crud } from "./crud";
import { CrudService } from "./crud.service";
import { take, tap } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-crud-form',
    templateUrl: './form-crud.component.html',
    styleUrls: ['./crud.component.css']
})

export class FormCrudComponent {
    public crud:Crud=new Crud();
    constructor(private crudService:CrudService,private router: ActivatedRoute){}

    saveCrud(){
        console.log('entro a registrar',this.crud, this.crud.body, this.crud.title)
        this.crudService.SaveCrud(this.crud);
        alert("Se guardo el producto con exito");
    }
}
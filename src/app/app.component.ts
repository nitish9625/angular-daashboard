import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { NgModule,enableProdMode } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';

  helloWorld(){
    alert('Hello world')
  }


constructor(private HttpService:HttpService){
 
}

// @NgModule({
//   imports:[
//     BrowserModule,
//     DxDataGridModule
//   ],
// })
ngOnInit():void{

}
onShow(event:any){
  // alert('show button clicked');
  // console.log(event);
  alert(event.traget.innerHTML);
}

  handleEvent(){
    this.HttpService.getRequest('https://jsonplaceholder.typicode.com/todos/3')
  }
}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  constructor() { }
  takeScreenshortdat:any=[];
  async chanegeddata(datas:any){
   this.takeScreenshortdat = await datas;
   if(this.takeScreenshortdat){
      return datas;
   }

  }

  boxshadows:any[]=[
    {'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px !important'},
    {'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px !important'},
    {'box-shadow': 'rgba(0, 0, 0, 0.25) 0px 5px 20px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px !important'},
    {'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px !important'},
    {'box-shadow':' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important'},
    {'box-shadow': 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px !important'},
    {'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px !important'},
    {'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important'},
    {'box-shadow': 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset !important'},
    {'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px !important'},
    {'box-shadow': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px !important'},
    {'box-shadow': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px !important'},
    {'box-shadow': 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px !important'},
    {'box-shadow': 'rgba(0, 0, 0, 0.2) 0px 20px 30px !important'},
  ]


 

}

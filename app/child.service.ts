import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

export interface IChild {
    id: number;
}

@Injectable()
export class ChildService {

    constructor(private _baseService: BaseService<IChild>) { }

     doSomething<IChild>(){ 
        return this._baseService.doSomething();
    }
}
import { Injectable, Scope } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

//SINGLETON
@Injectable({ scope: Scope.DEFAULT })
/* REQUEST 
@Injectable({ scope: Scope.REQUEST })
*/
/* TRANSIENT 
@Injectable({ scope: Scope.TRANSIENT})
*/
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

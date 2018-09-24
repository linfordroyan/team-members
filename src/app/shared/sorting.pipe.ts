import { Pipe, PipeTransform } from '@angular/core';
import { MembersService } from '../services/members.service';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  constructor(private memberService: MembersService) { }
  transform(companies: Array<any>, args: any): any {
    if (companies === undefined) return
    const m = args.direction ? -1 : 1
    return companies.sort((a: any, b: any): number => {
      const x = a[args.property];
      const y = b[args.property];
      return (x === y) ? 0 : (x < y) ? -1*m : 1*m
    })
  }

}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any, filteredStatus: string): any {
    if(!items) return [];
    if(!filteredStatus) return items;

    filteredStatus = filteredStatus.toLowerCase();

return items.filter( it => {
      return it.name.toLowerCase().includes(filteredStatus);
    });
   }
}

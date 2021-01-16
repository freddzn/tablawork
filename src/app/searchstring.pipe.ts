import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchstring'
})
export class SearchstringPipe implements PipeTransform {

  transform(value: any, args: any):any {
    return value.filter((data:any) => {
      return data.title.toLowerCase().includes(args.toLowerCase())

    });
  }

}


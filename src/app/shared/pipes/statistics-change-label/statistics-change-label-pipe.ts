import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statisticsChangeLabel',
})
export class StatisticsChangeLabelPipe implements PipeTransform {
  transform(change: string, changeLabel: string): string {
    if (change !== '0') return change + ' ' + changeLabel;
    else return changeLabel;
  }
}

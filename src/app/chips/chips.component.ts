import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

    disabled: boolean = false;
    chipAddition: boolean = true;
    chipRemoval: boolean = true;

    strings: string[] = [
        'stepper',
        'expansion-panel',
        'markdown',
        'highlight',
        'loading',
        'media',
        'chips',
        'http',
        'json-formatter',
        'pipes',
        'need more?',
    ];

    filteredStrings: string[];

    stringsModel: string[] = this.strings.slice(0, 6);

    ngOnInit(): void {
        this.filterStrings('');
    }

    filterStrings(value: string): void {
        this.filteredStrings = this.strings.filter((item: any) => {
            if (value) {
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
            } else {
                return false;
            }
        }).filter((filteredItem: any) => {
            return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
        });
    }
}

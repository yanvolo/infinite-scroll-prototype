import {Directive, AfterViewInit, ElementRef, Input, HostListener} from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';

interface ScrollPosition {
    sH: number;
    sT: number;
    cH: number;
};

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
    sH: 0,
    sT: 0,
    cH: 0
};


import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';

import {
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventService,
    EventResolver,
    EventListResolver,
    CreateSessionComponent, 
    SessionListComponent,
    DurationPipe
} from './events/index';

import { EventsAppComponent } from './events-app.component';

import { NavbarComponent } from './nav/navbar.component';

import { 
        TOASTR_TOKEN,
        Toastr,
        CollapsibleWellComponent,
        JQ_TOKEN,
        SimpleModalComponent,
        ModalTriggerDirective
} from './common/index';

import { Error404Component } from './errors/404.component';


import { appRoutes } from './routes';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [ EventsAppComponent,
                    EventsListComponent,
                    EventThumbnailComponent,
                    EventDetailsComponent,
                    CreateEventComponent,
                    NavbarComponent,
                    Error404Component,
                    CreateSessionComponent,
                    SessionListComponent,
                    CollapsibleWellComponent,
                    DurationPipe,
                    SimpleModalComponent,
                    ModalTriggerDirective
                ],
    providers: [
                    {
                        provide: LOCALE_ID,
                        useValue:'en-gb'
                    },
                    EventService,
                    {
                        provide:TOASTR_TOKEN,
                        useValue: toastr 
                    },
                    {
                        provide: JQ_TOKEN,
                        useValue: jQuery 
                    },
                    EventResolver,
                    EventListResolver,
                    AuthService
                ],
    bootstrap: [EventsAppComponent]

})

export class AppModule {
   
}/**/

function checkDirtyState(component:CreateEventComponent): boolean {
    if(component.isDirty) {
        return window.confirm('You have not saved, do you really want to cancel?');
    }
    return true;
}
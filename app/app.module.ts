import { NgModule } from '@angular/core'
import { LOCALE_ID } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './user/auth.service'

import {
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component'

import { NavbarComponent } from './nav/navbar.component'

import { ToastrService } from './common/toastr.service'
import { CollapsibleWellComponent } from './common/collapsible-well.component'
import { Error404Component } from './errors/404.component'


import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
                    DurationPipe
                ],
    providers: [
                    {provide: LOCALE_ID, useValue:"en-gb"},
                    EventService,
                    ToastrService,
                    EventRouteActivator,
                    {
                        provide: 'canDeactivateCreateEvent',
                        useValue: checkDirtyState
                    },
                    EventListResolver,
                    AuthService
                ],
    bootstrap: [EventsAppComponent]

})

export class AppModule {
   
}/**/

function checkDirtyState(component:CreateEventComponent): boolean {
    if(component.isDirty){
        return window.confirm('You have not saved, do you really want to cancel?')
    }
    return true;
}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventService,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component'

import { NavbarComponent } from './nav/navbar.component'

import { ToastrService } from './common/toastr.service'
import { Error404Component } from './errors/404.component'


import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [ EventsAppComponent,
                    EventsListComponent,
                    EventThumbnailComponent,
                    EventDetailsComponent,
                    CreateEventComponent,
                    NavbarComponent,
                    Error404Component
                ],
    providers: [
                    EventService,
                    ToastrService,
                    EventRouteActivator,
                    {
                        provide: 'canDeactivateCreateEvent',
                        useValue: checkDirtyState
                    },
                    EventListResolver
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
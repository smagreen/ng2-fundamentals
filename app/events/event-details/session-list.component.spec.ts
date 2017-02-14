import { SessionListComponent } from './session-list.component'
import { ISession } from '../shared/event.model'

describe('SessionListComponent', () => {
    let component: SessionListComponent
    let mockAuthService, mockVoterService

    beforeEach(() => {
        component = new SessionListComponent();
    })

    describe('ngOnChanges',() => {
        it('should filter the sessions correctly', () => {
            //arrange
            component.sessions = <ISession[]>[
                {name: 'session1', level: 'intermediate'},
                {name: 'session2', level: 'intermediate'},
                {name: 'session3', level: 'beginner'},
            ]
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            
            //act
            component.ngOnChanges();

            //assert
            expect(component.visibleSessions.length).toBe(2);
            expect(component.visibleSessions[0].name).toBe('session1');

        })   

        it('should order the sessions correctly', () => {
            //arrange
            component.sessions = <ISession[]>[
                {name: 'Z', level: 'intermediate'},
                {name: 'X', level: 'intermediate'},
                {name: 'Y', level: 'beginner'},
            ]
            component.filterBy = 'all';
            component.sortBy = 'name';
            
            //act
            component.ngOnChanges();

            //assert
            expect(component.visibleSessions.length).toBe(3);
            expect(component.visibleSessions[0].name).toBe('X');
            expect(component.visibleSessions[2].name).toBe('Z');

        })   
    })
})
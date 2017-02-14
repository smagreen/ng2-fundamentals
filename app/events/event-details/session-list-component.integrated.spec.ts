import { TestBed, async, ComponentFixture} from '@angular/core/testing'
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core' 
import { SessionListComponent } from './session-list.component'
import { DurationPipe } from '../shared/duration.pipe'
import { CollapsibleWellComponent } from '../../common/index'
import { ISession } from '../shared/event.model'
import { By } from '@angular/platform-browser'

describe('Session List Component', () => {
    let fixture : ComponentFixture<SessionListComponent>,
        component : SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(async(() => {
      // Not using these - included for completeness
      let mockAuthService = {},
          mockVoterService = {}
      
      TestBed.configureTestingModule({
        imports: [],
        declarations: [
            SessionListComponent,
            DurationPipe,
            CollapsibleWellComponent
        ],
        providers: [
            // { provide: AuthService: useValue: mockAuthService },
            // { provide: VoterService: useValue: mockVoterService }
        ],
        schemas: [
            // NO_ERRORS_SCHEMA -- Ignore not understood elements/components 
            // Use carefully - could mask potential problems!!
        ] 
      }).compileComponents();

    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })


    describe('initial display', () => {
        it('should display the correct session title', () => {
            //arrange
            component.sessions = [{id:3, name:'Session 1', presenter:'Steve',
                duration:1, level: 'beginner',
                abstract:'session abstract', voters:['voter1', 'voter2']}];
                
            component.filterBy='all'
            component.sortBy='name'

            //act
            component.ngOnChanges()
            fixture.detectChanges()

            //assert
            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            // Alternative approach using debug element to access *By* utility
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1'); 

        })    
    })
})
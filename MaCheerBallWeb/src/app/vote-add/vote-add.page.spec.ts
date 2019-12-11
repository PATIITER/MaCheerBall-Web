import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoteAddPage } from './vote-add.page';

describe('VoteAddPage', () => {
  let component: VoteAddPage;
  let fixture: ComponentFixture<VoteAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoteAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

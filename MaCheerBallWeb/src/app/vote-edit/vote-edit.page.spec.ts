import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoteEditPage } from './vote-edit.page';

describe('VoteEditPage', () => {
  let component: VoteEditPage;
  let fixture: ComponentFixture<VoteEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

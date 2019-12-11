import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoteCheckPage } from './vote-check.page';

describe('VoteCheckPage', () => {
  let component: VoteCheckPage;
  let fixture: ComponentFixture<VoteCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteCheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoteCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

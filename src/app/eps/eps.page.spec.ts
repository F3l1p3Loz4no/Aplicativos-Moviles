import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpsPage } from './eps.page';

describe('EpsPage', () => {
  let component: EpsPage;
  let fixture: ComponentFixture<EpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

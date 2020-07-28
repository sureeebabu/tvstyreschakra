import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayallocatedtestPage } from './todayallocatedtest.page';

describe('TodayallocatedtestPage', () => {
  let component: TodayallocatedtestPage;
  let fixture: ComponentFixture<TodayallocatedtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayallocatedtestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayallocatedtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

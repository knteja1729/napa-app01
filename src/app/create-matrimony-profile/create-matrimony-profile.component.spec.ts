import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMatrimonyProfileComponent } from './create-matrimony-profile.component';

describe('CreateMatrimonyProfileComponent', () => {
  let component: CreateMatrimonyProfileComponent;
  let fixture: ComponentFixture<CreateMatrimonyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMatrimonyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMatrimonyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSearchComponent } from './tile-search.component';

describe('TileSearchComponent', () => {
  let component: TileSearchComponent;
  let fixture: ComponentFixture<TileSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

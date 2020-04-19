import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCaughtComponent } from './pokemon-caught.component';

describe('PokemonCaughtComponent', () => {
  let component: PokemonCaughtComponent;
  let fixture: ComponentFixture<PokemonCaughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCaughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCaughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

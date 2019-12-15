import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFornecedorComponent } from './cadastro-fornecedor.component';

describe('CadastroFornecedorComponent', () => {
  let component: CadastroFornecedorComponent;
  let fixture: ComponentFixture<CadastroFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

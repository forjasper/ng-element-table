import { NgElementTableModule } from './ng-element-table.module';

describe('NgElementTableModule', () => {
  let ngElementTableModule: NgElementTableModule;

  beforeEach(() => {
    ngElementTableModule = new NgElementTableModule();
  });

  it('should create an instance', () => {
    expect(ngElementTableModule).toBeTruthy();
  });
});

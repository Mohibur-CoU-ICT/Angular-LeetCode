export class Language {

  private languages: any[] = [
    {'id': 1, 'name': 'C'}, 
    {'id': 2, 'name': 'C++'}, 
    {'id': 3, "name": 'Java'}, 
    {'id': 4, 'name': 'Python'}, 
    {'id': 5, 'name': 'JavaScript'}
  ];

  getLanguages() {
    return this.languages;
  }
}
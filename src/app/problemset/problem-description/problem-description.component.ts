import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/helper/language';

@Component({
  selector: 'app-problem-description',
  templateUrl: './problem-description.component.html',
  styleUrls: ['./problem-description.component.css']
})
export class ProblemDescriptionComponent implements OnInit {

  obj = new Language();
  languages = this.obj.getLanguages();

  constructor() { }

  ngOnInit(): void {
  }

}

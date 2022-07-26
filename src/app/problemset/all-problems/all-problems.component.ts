import { Component, OnInit } from '@angular/core';
import { ProblemsetService } from '../problemset.service';

@Component({
  selector: 'app-all-problems',
  templateUrl: './all-problems.component.html',
  styleUrls: ['./all-problems.component.css']
})
export class AllProblemsComponent implements OnInit {

  all_problems: any[] = [];

  constructor(private problemService: ProblemsetService) { }

  ngOnInit(): void {
    this.all_problems = this.problemService.getAllProblems();
  }

}

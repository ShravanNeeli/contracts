import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.css'
})
export class SubHeaderComponent {
constructor(private router:Router){}

  onClick(){
    this.router.navigate(['/new']);
  }
}

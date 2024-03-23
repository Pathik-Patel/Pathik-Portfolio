import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  standalone: true,
  imports: [FadeDirective],
  
})
export class ResumeComponent {

}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-time-entry",
  templateUrl: "./time-entry.component.html",
  styleUrls: ["./time-entry.component.scss", "./checkbox.css"],
})
export class TimeEntryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  clickCheckbox() {
    console.log("TEST");
  }
}

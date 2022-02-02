import { Component, OnInit } from '@angular/core';
import { EventActivitiesService } from '../event-activities.service';
import { EventActivity } from '../models/EventActivity.model';
// import { }

@Component({
  selector: 'app-mes-activites',
  templateUrl: './mes-activites.component.html',
  styleUrls: ['./mes-activites.component.css']
})
export class MesActivitesComponent implements OnInit {
  activeActivities : EventActivity[] = [];

  previousActivities : EventActivity[] = [];

  Active : boolean = true;
  constructor(private eventservice: EventActivitiesService) { }

  ngOnInit(): void {
    this.eventservice.init();
    this.activeActivities = this.eventservice.nextEvents;
    this.previousActivities = this.eventservice.lastEvents;
    console.log(this.activeActivities);
    console.log(this.previousActivities);

  }

  hideActivity(id: string) {
    console.log(id);
    this.eventservice.hideActivity(id);
    // this.visibleActivities = this.eventservice.getActivity(id);
  }

  displayActive(state : boolean) {
    this.Active = state;
  }


}

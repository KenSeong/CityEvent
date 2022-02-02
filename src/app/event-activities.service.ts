import { Injectable } from '@angular/core';
import { EventActivity } from './models/EventActivity.model';
let myData = require ("../assets/data.json");
let uniqid = require('uniqid');

@Injectable({
  providedIn: 'root'
})
export class EventActivitiesService {

  activities: EventActivity [] = [];

  constructor() { }

  initialized: boolean = false;

  init() {
    if(this.initialized) {
      return;
    } 
    // for (const activity of datajson.task_init) {
    //   this.activities.push(new EventActivity(activity.id, activity.title))
    // }
    
    this.initialized = true;
    };

  lastEvents: EventActivity[] = myData.activeActivities;
  nextEvents: EventActivity[] = myData.previousActivities;

  hideActivity(id: string) {
    let displayedActivities: EventActivity [] = [];
    let invisibleActivities: EventActivity [] = [];

    for (const activite of this.activities) {
      if (activite.id !== id) {
        displayedActivities.push(activite);
      } else {
        invisibleActivities.push(activite);
      }
      this.activities = displayedActivities;
      console.log(this.activities);
    }
  }

  getActivity(id:string | null):Task | null{
  
    this.init();
  
    let activity:Task|null=null;
    for (let i=0 ;i< this.activities.length;i++){
      if(id === this.activities[i].id){
        // activity=this.activities[i];
        break;
      }
      else{
        activity =  null;
      }
    }
    return activity;
  }


}




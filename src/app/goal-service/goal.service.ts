import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { goals } from '../goalList';
import { Goal } from '../goal';
@Injectable({
  providedIn: 'root'
})
export class GoalService {
  Goals?:Goal[]
  
  getGoals(){
    this.Goals=goals
    return this.Goals
  }

  getGoal(id:any){

    for (let goal of goals){

      if (goal.id == id){
        return goal;
      }
    }
    return null
  }
  constructor() { }
}

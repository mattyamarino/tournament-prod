import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TournamentEvent } from '../models/tournament-event';

@Component({
  selector: 'app-event-admin-parent',
  templateUrl: './event-admin-parent.component.html',
  styleUrls: ['./event-admin-parent.component.scss']
})
export class EventAdminParentComponent implements OnInit {

  constructor( private firestore: AngularFirestore ) { }

  ngOnInit(): void {
  }

  testDownload() {
    const data: TournamentEvent = {
      eventName: 'Hearts',
      eventDescription: 'playing some cards',
      host: 'Matt',
      ejc: [],
      round: 1,
      first: 'Shelbie',
      second: 'Tyler',
      third: 'Matt',
      fourth: 'Victoria',
      doubleHeader: true
    }

    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("tournamentEvents")
          .add(data)
          .then(res => {}, err => reject(err));
    });
  }

  updloadBlankEntry() {
    const data: TournamentEvent = {
      eventName: '',
      eventDescription: '',
      host: '',
      ejc: [],
      round: 0,
      first: '',
      second: '',
      third: '',
      fourth: '',
      doubleHeader: false
    }

    return new Promise<any>((resolve, reject) =>{
      this.firestore
          // .collection("tournamentEvents")
          .collection("z-test-tournamentEvents")
          .add(data)
          .then(res => {}, err => reject(err));
    });
  }

}

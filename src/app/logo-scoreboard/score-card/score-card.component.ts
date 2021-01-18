import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Contestant } from 'src/app/models/contestant';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Input() contestant = new Contestant;
  @Input() place!: string;
  @Input() isAllContestantsTied!: boolean;
  @Input() isFinalRound: boolean = false;
  positionImageUrl!: string;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.showImage();
  }

  getEjc(): string {
    return this.contestant.ejc ? 'Juice!' : ''
  }

  showImage(): void {
    let storageRef = this.afStorage.storage.ref();
    storageRef.child(`positions/${this.place}.png`).getDownloadURL().then((url) => {
      this.positionImageUrl = url;
      console.log('***********', this.positionImageUrl)
    });
  }

}

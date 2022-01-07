import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'halo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  public movies:any = [];
  public limit:number = 9;
  throttle = 500;
  scrollDistance = 1;
  scrollUpDistance = 1;
  direction = "";
  constructor(public CardService: CardService) { 
   // this.limit = 9;
    this.getMovies(this.limit)
  }

  ngOnInit(): void {
    
  }

  onScrollDown(){
    this.limit += 9;
    console.log(this.limit);
    this.getMovies(this.limit);
  }

  onScrollUp(){
    this.limit =9;
    console.log(this.limit);
    this.getMovies(this.limit);
  }

  getMovies(l:any) {
    return this.CardService.getMovies(1, l).subscribe((response: {}) => {
       this.movies = response;
       console.log(this.movies);
    });
  }

}

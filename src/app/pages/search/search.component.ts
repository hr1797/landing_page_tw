import { Component, OnInit } from '@angular/core';

import { TwApiService } from '../../services/tw-api.service';
import { Tweet } from './../../models/tweets.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private tw_api: TwApiService) {}
  tweetsArr: Tweet[] = [];

  ngOnInit(): void {}

  sendParams({ keywords, amount }: { keywords: string; amount: number }): void {
    console.log(keywords);
    console.log(amount);
    this.tw_api.getTweets(keywords, amount).subscribe((tweets) => {
      console.log(tweets);
      tweets.statuses.map((tweet: any) => {
        this.tweetsArr.push({
          user: tweet.user.name,
          text: tweet.text,
          favorites: tweet.favorite_count,
          retweeted: tweet.retweet_count,
        });
      });
      console.log(this.tweetsArr);
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../Services/news.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  newsFeed: any;

  constructor(private News: NewsService) {}

  ngOnInit() {
    this.News.getNews().subscribe(data => {
      console.log(data);
      this.newsFeed = data;
    });
  }

  NewsDetail(source) {
    this.News.getNewsDetail(source).subscribe(
      data => (this.newsFeed = data["newsFeed"])
    );
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  apiKey = "051e13eeea14401caa046b1771058ec4";

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=" +
        this.apiKey
    );
  }

  getNewsDetail(source: string) {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?source=" +
        source +
        "&apiKey=" +
        this.apiKey
    );
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";

@Injectable()
export class CategoryProvider {
  private baseUrl: string = "../../assets/api/categories.json";

  constructor(public http: HttpClient) {
    console.log("Hello CategoryProvider Provider");
  }

  public getCategoriesData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}

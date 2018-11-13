import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TripProvider {
  private baseUrl: string = "../../assets/api";

  constructor(public http: HttpClient) {}

  public getTripsData(): Observable<any> {
    return this.http.get(this.baseUrl + "/trips.json");
  }
}

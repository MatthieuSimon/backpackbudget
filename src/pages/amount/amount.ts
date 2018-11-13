import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ExpensePage } from "../expense/expense";

@IonicPage()
@Component({
  selector: "page-amount",
  templateUrl: "amount.html"
})
export class AmountPage {
  public amount: string = "";
  public category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = this.navParams.get("category");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AmountPage");
  }

  public addNumber(i: number) {
    this.amount = this.amount.concat(i.toString());
    console.log(this.amount);
  }

  public removeNumber() {
    this.amount = this.amount.slice(0, this.amount.length - 1);
  }

  public addExpense() {
    console.log("add " + this.amount);
    this.navCtrl.push(ExpensePage, {
      category: this.category,
      amount: this.amount
    });
  }
}

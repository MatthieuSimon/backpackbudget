import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ExpenseProvider } from "../../providers/expense/expense.provider";
import { TripPage } from "../trip/trip";
import { ConfirmationPage } from "../confirmation/confirmation";

@IonicPage()
@Component({
  selector: "page-expense",
  templateUrl: "expense.html"
})
export class ExpensePage {
  public amount: number;
  public description: string;
  public category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public expenseProvider: ExpenseProvider) {
    this.amount = this.navParams.get("amount");
    this.category = this.navParams.get("category");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpensePage");
  }

  addExpense() {
    this.expenseProvider.addExpense(this.amount, this.category, this.description);
    this.navCtrl.push(ConfirmationPage);
  }
}

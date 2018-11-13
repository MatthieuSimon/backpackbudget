import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ExpenseProvider } from "../../providers/expense/expense.provider";
import { ExpensesGroupByCategory } from "../../providers/expense/expense.provider";
import { TripProvider } from "../../providers/trip/trip.provider";
import { CategoryPage } from "../category/category";

@IonicPage()
@Component({
  selector: "page-trip",
  templateUrl: "trip.html"
})
export class TripPage {
  public tripData: any;
  public categoriesData: any;
  public expensesData: ExpensesGroupByCategory[];

  constructor(
    public navCtrl: NavController,
    public tripProvider: TripProvider,
    public expenseProvider: ExpenseProvider,
    public navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.tripProvider.getTripsData().subscribe(tripData => {
      this.tripData = tripData;
    });
    this.expenseProvider.getExpensesGroupByCategory().subscribe(expensesData => {
      this.expensesData = expensesData;
    });
  }

  public showCategoryExpenses(expensesForCategory: ExpensesGroupByCategory) {
    console.log(expensesForCategory);
    this.navCtrl.push(CategoryPage, {
      expensesForCategory: expensesForCategory
    });

  }
}

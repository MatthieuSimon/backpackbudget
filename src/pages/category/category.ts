import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PopoverController } from "ionic-angular";
import { AmountPage } from "../amount/amount";

@IonicPage()
@Component({
  selector: "page-category",
  templateUrl: "category.html"
})
export class CategoryPage {
  public expensesForCategory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.expensesForCategory = navParams.data.expensesForCategory;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CategoryPage");
  }

  public addExpense() {
    let popover = this.popoverCtrl.create(
      AmountPage,
      { category: this.expensesForCategory.category },
      { cssClass: "custom-popover" }
    );
    popover.present({});
  }
}

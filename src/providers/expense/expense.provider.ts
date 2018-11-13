import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { map } from "rxjs/operators";
import { Expense } from "../../models/Expense";
import { forkJoin } from "rxjs/observable/forkJoin";
import Utils from "../../utils";

import { CategoryProvider } from "../category/category.provider";

export class ExpensesData {
  constructor(public dates: string[], public expenses: Expense[]) {}
}

export class ExpensesGroupByCategory {
  constructor(public category: string, public icon: string, public total: number, public expenses: Expense[]) {}
}

@Injectable()
export class ExpenseProvider {
  private baseUrl: string = "../../assets/api/expenses.json";

  constructor(private readonly http: HttpClient, public categoryProvider: CategoryProvider) {}

  private getExpenses(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getExpensesData(): Observable<any> {
    return this.getExpenses().pipe(
      map(data => {
        let expenses = data;
        expenses.map(exp => {
          exp.date = new Date(exp.date);
        });
        return expenses;
      })
    );
  }

  public getExpensesGroupByCategory(): Observable<ExpensesGroupByCategory[]> {
    return forkJoin([this.getExpensesData(), this.categoryProvider.getCategoriesData()]).pipe(
      map(results => {
        let expenses = results[0];
        let categoriesData = results[1];

        let categories: any[] = Array.from(new Set(expenses.map(exp => exp.category)));

        return categories.map(cat => {
          let expensesForCategory: Expense[] = expenses.filter(exp => exp.category === cat);
          return new ExpensesGroupByCategory(
            cat,
            this.getIcon(categoriesData, cat),
            expensesForCategory.map(exp => exp.total).reduce((a, b) => a + b),
            expensesForCategory
          );
        });
      })
    );
  }

  public getExpensesDataGroupByDate(expenses: Expense[]) {
    let expensesByDate = Utils.groupBy(expenses, "date");
    return new ExpensesData(Object.keys(expensesByDate), expensesByDate);
  }

  public addExpense(amount: number, category: string, description: string) {
    console.log("Add new expense" + amount + " " + category + " " + description);
  }

  private getIcon(categories: any[], category: string): string {
    console.log("category", category);
    return categories.filter(cat => cat.title === category)[0].icon;
  }
}

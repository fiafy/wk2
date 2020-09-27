import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { AddstudyplanPage } from "./../addstudyplan/addstudyplan";
import { AddstudyplanonePage } from "./../addstudyplanone/addstudyplanone";

import { Observable } from "rxjs";

/**
 * Generated class for the StudyplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-studyplan",
  templateUrl: "studyplan.html",
})
export class StudyplanPage {
  rowsStudyplan = [];
  rowsStudyplanone = [];
  data: Observable<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadStudyplan();
    this.LoadStudyplanone();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudyplanPage");
  }

  Add() {
    this.navCtrl.push(AddstudyplanPage);
  }
  LoadStudyplan() {
    let url = "http://172.20.10.10/wkapp/get_studyplan.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsStudyplan = data.rowsStudyplan;
        console.log(this.rowsStudyplan);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Addone() {
    this.navCtrl.push(AddstudyplanonePage);
  }
  LoadStudyplanone() {
    let url = "http://172.20.10.10/wkapp/get_studyplanone.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsStudyplanone = data.rowsStudyplanone;
        console.log(this.rowsStudyplanone);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

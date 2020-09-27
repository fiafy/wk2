import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the ShowstudyplanonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-showstudyplanone",
  templateUrl: "showstudyplanone.html",
})
export class ShowstudyplanonePage {
  rowsStudyplan = [];
  rowsStudyplanone = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadStudyplan();
    this.LoadStudyplanone();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShowstudyplanonePage");
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

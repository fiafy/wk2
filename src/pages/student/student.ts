import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { ShowstudyplanonePage } from "./../showstudyplanone/showstudyplanone";

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-student",
  templateUrl: "student.html",
})
export class StudentPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudentPage");
  }

  Showstudyplanone() {
    this.navCtrl.push(ShowstudyplanonePage);
  }

  logout() {
    this.storage.clear();

    this.navCtrl.setRoot(HomePage);
  }
}

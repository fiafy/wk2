import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StudyplanPage } from "./../studyplan/studyplan";

/**
 * Generated class for the IncludeplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-includeplan",
  templateUrl: "includeplan.html",
})
export class IncludeplanPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad IncludeplanPage");
  }
  Studyplan() {
    this.navCtrl.push(StudyplanPage);
  }
}

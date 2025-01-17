import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StudyplanPage } from "../studyplan/studyplan";
import { IncludeplanPage } from "./../includeplan/includeplan";
/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-information",
  templateUrl: "information.html",
})
export class InformationPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad InformationPage");
  }
  Studyplan() {
    this.navCtrl.push(StudyplanPage);
  }
  Includeplan() {
    this.navCtrl.push(IncludeplanPage);
  }
}

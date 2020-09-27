import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the StudenttwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-studenttwo",
  templateUrl: "studenttwo.html",
})
export class StudenttwoPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad StudenttwoPage");
  }

  logout() {
    this.storage.clear();

    this.navCtrl.setRoot(HomePage);
  }
}

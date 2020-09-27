import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { HomePage } from "../home/home";
import { ContactPage } from "../contact/contact";
import { SearchPage } from "../search/search";
import { IndexPage } from "../index/index";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html",
})
export class TabsPage {
  tab1;
  tab2;
  tab3;
  tab4;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = IndexPage;
    this.tab2 = SearchPage;
    this.tab3 = ContactPage;
    this.tab4 = HomePage;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TabsPage");
  }
}

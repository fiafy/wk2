import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the NewsreleasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-newsrelease",
  templateUrl: "newsrelease.html",
})
export class NewsreleasePage {
  rowsNews = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadNews();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NewsreleasePage");
  }

  LoadNews() {
    let url = "http://172.20.10.10/Wkapp/get_News.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsNews = data.rowsNews;
        console.log(this.rowsNews);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

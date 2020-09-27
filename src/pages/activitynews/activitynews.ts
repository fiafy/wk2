import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the ActivitynewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-activitynews",
  templateUrl: "activitynews.html",
})
export class ActivitynewsPage {
  rowsActivity = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.LoadActivity();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ActivitynewsPage");
  }
  //ส่งข้อมูลไป
  LoadActivity() {
    let url = "http://172.20.10.10/wkapp/get_activity.php";
    this.http.get(url).subscribe(
      (data: any) => {
        this.rowsActivity = data.rowsActivity;
        console.log(this.rowsActivity);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

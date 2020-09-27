import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ThactivitynewsPage } from "./../thactivitynews/thactivitynews";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the UpdateactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-updateactivity",
  templateUrl: "updateactivity.html",
})
export class UpdateactivityPage {
  any = {};
  id: number;

  head_activity: string;
  description: string;
  date: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.id = this.navParams.get("id");
    this.head_activity = this.navParams.get("head_activity");
    this.description = this.navParams.get("description");
    this.date = this.navParams.get("date");

    if (this.id != null) {
      this.id = this.id;
    }
    if (this.head_activity != null) {
      this.head_activity = this.head_activity;
    }
    if (this.description != null) {
      this.description = this.description;
    }

    if (this.date != null) {
      this.date = this.date;
    }

    console.log(this.id);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdatenewsPage");
  }
  //////////////////
  Update(id, head_news, description, date) {
    let postdataset = new FormData();

    /* postdataset.append("id", this.id.toString()); */
    postdataset.append("head_activity", this.head_activity);
    postdataset.append("description", this.description);
    postdataset.append("date", this.date);

    let url = "http://172.20.10.10/Wkapp/update_activity.php?id=" + id;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(ThactivitynewsPage);
      // console.log(data); */
    });
  }
}

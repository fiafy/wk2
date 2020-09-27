import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PublicizePage } from "./../publicize/publicize";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-updatenews",
  templateUrl: "updatenews.html",
})
export class UpdatenewsPage {
  any = {};
  id: number;

  head_news: string;
  description: string;
  date: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.id = this.navParams.get("id");
    this.head_news = this.navParams.get("head_news");
    this.description = this.navParams.get("description");
    this.date = this.navParams.get("date");

    if (this.id != null) {
      this.id = this.id;
    }
    if (this.head_news != null) {
      this.head_news = this.head_news;
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
    postdataset.append("head_news", this.head_news);
    postdataset.append("description", this.description);
    postdataset.append("date", this.date);

    let url = "http://172.20.10.10/Wkapp/update_news.php?id=" + id;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(PublicizePage);
      // console.log(data); */
    });
  }
}

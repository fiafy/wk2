import { ThactivitynewsPage } from "./../thactivitynews/thactivitynews";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the AddactivitynewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-addactivitynews",
  templateUrl: "addactivitynews.html",
})
export class AddactivitynewsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddactivitynewsPage");
  }
  Addactivity(head_activity, description, date) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      head_activity: head_activity,
      description: description,
      date: date,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://172.20.10.10/wkapp/add_activity.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกประกาศเรียบร้อย");
      this.navCtrl.push(ThactivitynewsPage);
      // console.log(data);
    });
  }
}

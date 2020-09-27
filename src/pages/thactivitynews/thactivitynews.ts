import { UpdateactivityPage } from "./../updateactivity/updateactivity";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { AddactivitynewsPage } from "../addactivitynews/addactivitynews";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

/**
 * Generated class for the ThactivitynewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-thactivitynews",
  templateUrl: "thactivitynews.html",
})
export class ThactivitynewsPage {
  rowsActivity = [];
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.LoadActivity();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ThactivitynewsPage");
  }
  Add() {
    this.navCtrl.push(AddactivitynewsPage);
  }
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
  deletedata(id: number) {
    var url = "http://172.20.10.10/wkapp/deletedata_activity.php?id=" + id;

    this.data = this.http.get(url);

    this.data.subscribe((data) => {
      alert("ลบข้อมูลเรียบร้อย");
      this.LoadActivity();
    });
  }

  Delete(id: number) {
    // console.log(id);
    let alert1 = this.alertCtrl.create({
      title: "ยืนยันการลบ",
      message: "คุณต้องการลบรายการนี้ หรือไม่?",
      buttons: [
        {
          text: "ยกเลิก",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "ใช่",
          handler: () => {
            this.deletedata(id);
          },
        },
      ],
    });
    alert1.present();
  }
  //อัปเดพ//
  btupdate(
    id: number,
    head_activity: string,
    description: string,
    date: string
  ) {
    this.navCtrl.push(UpdateactivityPage, {
      id: id,
      head_activity: head_activity,
      description: description,
      date: date,
    });
  }
}

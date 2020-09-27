import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { AddpublicizePage } from "../addpublicize/addpublicize";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UpdatenewsPage } from "./../updatenews/updatenews";

/**
 * Generated class for the PublicizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-publicize",
  templateUrl: "publicize.html",
})
export class PublicizePage {
  rowsNews = [];
  data: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
    this.LoadNews();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PublicizePage");
  }

  Add() {
    this.navCtrl.push(AddpublicizePage);
  }

  LoadNews() {
    let url = "http://172.20.10.10/wkapp/get_News.php";
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

  deletedata(id: number) {
    var url = "http://172.20.10.5/wkapp/deletedata_news.php?id=" + id;

    this.data = this.http.get(url);

    this.data.subscribe((data) => {
      alert("ลบข้อมูลเรียบร้อย");
      this.LoadNews();
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
  btupdate(id: number, head_news: string, description: string, date: string) {
    this.navCtrl.push(UpdatenewsPage, {
      id: id,
      head_news: head_news,
      description: description,
      date: date,
    });
  }
} //

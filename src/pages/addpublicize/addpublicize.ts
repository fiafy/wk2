import { PublicizePage } from "./../publicize/publicize";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the AddpublicizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-addpublicize",
  templateUrl: "addpublicize.html",
})
export class AddpublicizePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddpublicizePage");
  }

  AddNews(head_news, description, date) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      head_news: head_news,
      description: description,
      date: date,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://172.20.10.10/Wkapp/add_news.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกประกาศเรียบร้อย");
      this.navCtrl.push(PublicizePage);
      // console.log(data);
    });

    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  }
} //end

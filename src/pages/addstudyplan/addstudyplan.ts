import { StudyplanPage } from "./../studyplan/studyplan";

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the AddstudyplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-addstudyplan",
  templateUrl: "addstudyplan.html",
})
export class AddstudyplanPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddstudyplanPage");
  }
  Addstudyplan(course_code, course, credit) {
    // ไว้สำหรับเพิ่มข้อมูลเข้า Database
    let jsonData = {
      course_code: course_code,
      course: course,
      credit: credit,
    }; //สร้าง obj
    console.log(jsonData);
    let url = "http://172.20.10.10/wkapp/add_studyplan.php"; //ให้ไป post ที่  url
    this.http.post(url, jsonData).subscribe((data: any) => {
      alert("บันทึกแผนการเรียนเรียบร้อย");
      this.navCtrl.push(StudyplanPage);
      // console.log(data);
    });

    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  }
}

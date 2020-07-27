import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  count: number = 0;
  constructor(
    private config: ConfigService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    const lsOperator = JSON.parse(localStorage.getItem('lsOperator'));
    console.log(lsOperator.operator.operator_emp_code);
    this.getOperatorTaskCount(lsOperator.operator.operator_emp_code);
  }

  getOperatorTaskCount(empCode) {
    this.loader.present(`Please Wait ....`);

    const values = {
      "operator_emp_code" : empCode
    };
    this.config.postData(`getTaskCount`, values).subscribe(res => {
      console.log(res);
      const response: any = res;
      if (response.is_success) {
        this.count = response.data;
        this.loader.dismiss();
      }

    }, error => {
      console.log(error);
      this.loader.dismiss();
    });

  }

}

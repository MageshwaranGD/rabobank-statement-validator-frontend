import { Component } from '@angular/core';
import { RaboStatementService } from 'src/common/rabo-statement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RaboBankApp';
  constructor(){}
}

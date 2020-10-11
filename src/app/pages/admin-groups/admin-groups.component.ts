import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.css']
})
export class AdminGroupsComponent implements OnInit {

  constructor(private gs: GroupService) { }
  groupModel = {
    name: ''
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.gs.setGroup(this.groupModel.name).subscribe()
  }

}

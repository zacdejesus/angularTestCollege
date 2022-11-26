import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments: any
  public postId: string = ""
  public isLogged = true

  constructor(private router: ActivatedRoute, private service: UsersService) { }

  ngOnInit(): void {
    this.postId = this.router.snapshot.paramMap.get('id') as string
    this.getComments()
  }

  getComments() {
    this.service.getComments().subscribe(
      data => {

        let postAux: any = data
        this.comments = postAux.filter(comment => comment.postId == this.postId);
      },
      err => {
        console.log(err);
      }
    );
  }
}

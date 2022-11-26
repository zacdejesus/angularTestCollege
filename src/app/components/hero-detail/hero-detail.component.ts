import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  public userId: string = "";
  public posts: any;
  public isLogged = true

  constructor(private router: Router, private service: UsersService) {
    const navigation = this.router.getCurrentNavigation();
    this.userId = navigation!.extras as string
  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.service.getPost().subscribe(
      data => {

        let postAux: any = data
        this.posts = postAux.filter(xx => xx.userId == this.userId);

      },
      err => {
        console.log(err);
      }
    );
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title: string = "Here is the most interesting article ever"
  content: string = "The content here will blow you away. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum tempus purus, eget convallis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum porttitor tortor metus, non lacinia est vehicula ut. Aliquam eu velit ut lectus dignissim auctor. Vivamus ante sapien, tincidunt at faucibus pulvinar, efficitur vel diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam in fermentum mi. Donec lacinia accumsan tellus sit amet tristique. Fusce ac suscipit dolor. Sed porttitor leo sed scelerisque dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempus, dolor sit amet vulputate mollis, tortor nibh pellentesque enim, at varius lorem tellus eget sapien. Cras sit amet scelerisque quam. Proin volutpat urna in feugiat commodo. Integer facilisis sed urna maximus pulvinar."
  isTechRelated: boolean = true
}

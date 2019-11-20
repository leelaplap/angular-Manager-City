import {Component, OnInit} from '@angular/core';
import {Icity} from '../icity';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: Icity[] = [
    {
      name: 'hanoi',
      image: 'assets/images/anh1.jpg'
    },
    {
      name: 'london',
      image: 'assets/images/anh2.jpg'
    },
    {
      name: 'chicago',
      image: 'assets/images/anh1.jpg'
    },
  ];
  widthImg = 100;
  listCity: Icity[] = [];
  showImg = true;

  constructor() {
  }

  ngOnInit() {
    this.listCity = this.cities;
  }

  delete(id) {
    this.cities.splice(id, 1);
  }

  filter(event) {
    const keyword = event.target.value;
    this.listCity = (keyword) ? this.search(keyword) : this.cities;
  }

  search(keyword) {
    return this.cities.filter(
      city => city.name.toLowerCase().indexOf(keyword) !== -1
    );
  }

  showImage() {
    this.showImg = !this.showImg;
  }

}

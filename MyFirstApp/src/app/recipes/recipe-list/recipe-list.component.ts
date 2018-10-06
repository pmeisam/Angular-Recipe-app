import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Gheyme Nesar', 'this is simply a recipe', 'http://mydorna.com/wp-content/uploads/2018/08/nesar1.jpg'),
    new Recipe('Dizi', 'this is a simply a recipe', 'http://www.iranreview.org/file/cms/files/Abgoosht.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

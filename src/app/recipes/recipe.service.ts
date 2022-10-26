import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Masala Dosa',
      'Very famous south indian breakfast',
      'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
      [new Ingredient('Rice', 50),
        new Ingredient('potato', 20)]),
    new Recipe('Paneer Biriyani',
      'A vegetable biriyani made with paneer and other spices',
      'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Instant-Pot-Paneer-Biryani.jpg',
      [new Ingredient('Basmati rice', 100),
        new Ingredient('Paneer', 120)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

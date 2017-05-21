export class RecipesResult {
  id: number;
  servings: number;
  title: string;
  readyInMinutes: number;
  image: string;
  extendedIngredients: object[];
  instructions: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.servings = obj && obj.servings || null;
    this.title = obj && obj.title || null;
    this.readyInMinutes = obj && obj.readyInMinutes || null;
    this.image = obj && obj.image || null;
    this.extendedIngredients = obj && obj.extendedIngredients || null;
    this.instructions = obj && obj.instructions || null;
  }
}

import { products } from "./itemSlice.js";

export function searchItems(searchItem) {
  if (!searchItem) {
    console.log("Search term is empty");
    return [0]; // Return early if search term is empty
  }

  const lowerCaseSearchItem = searchItem.toLowerCase(); // Convert search term to lowercase
  const itemsNamingArray = lowerCaseSearchItem.split(/\W+/);

  let itemIdCollection = [];

  for (let index = 0; index < itemsNamingArray.length; index++) {
    let element = itemsNamingArray[index];
    console.log(element);
    
    // Filter and add matching items
    const temp = products
      .filter(item => item.item_name.toLowerCase().includes(element))
      .map(item => item.id); // Get matching item IDs
    
    itemIdCollection = itemIdCollection.concat(temp); // Add matches to the collection
  }

  return itemIdCollection;
}


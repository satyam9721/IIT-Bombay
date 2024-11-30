document.addEventListener("DOMContentLoaded", () => {
    new AnimalTable(bigCats, "cats-container", ["species","name","size", "location","image" ],{name:""});
    new AnimalTable(dogs, "dogs-container", ["species","name","size", "location","image" ], { name: "bold" });
    new AnimalTable(bigFish, "fish-container", ["species","name","size", "location","image" ], {name: "bold blue italic"} );
  });
  

































































// document.addEventListener("DOMContentLoaded", () => {
//     // Table 1: No special styling
//     new AnimalTable(bigCats, "cats-container", ["species", "name", "size", "location", "image"], {
//       sortable: ["species", "name", "size", "location"],
//     });
  
//     // Table 2: Names in bold
//     new AnimalTable(dogs, "dogs-container", ["species", "name", "size", "location", "image"], {
//       nameClass: "table2-name",
//       sortable: ["name", "location"],
//     });
  
//     // Table 3: Names in bold, italic, and blue
//     new AnimalTable(bigFish, "fish-container", ["species", "name", "size", "location", "image"], {
//       nameClass: "table3-name",
//       sortable: ["size"],
//     });
//   });
  



// document.addEventListener("DOMContentLoaded", () => {
//   // Table 1: Sortable on all fields except image
//   new AnimalTable(bigCats, "cats-container", ["species", "name", "size", "location", "image"], {
//     sortable: ["species", "name", "size", "location"],
//   });

//   // Table 2: Names in bold, sortable on Name and Location
//   new AnimalTable(dogs, "dogs-container", ["species", "name", "size", "location", "image"], {
//     nameClass: "table2-name",
//     sortable: ["name", "location"],
//   });

//   // Table 3: Names in bold, italic, blue; sortable on Size only
//   new AnimalTable(bigFish, "fish-container", ["species", "name", "size", "location", "image"], {
//     nameClass: "table3-name",
//     sortable: ["size"],
//   });
// });






// document.addEventListener("DOMContentLoaded", () => {
//     new AnimalTable(bigCats, "cats-container", ["species", "name", "size", "location", "image"], {
//       name: "bold",
//       sortable: ["species", "name", "size", "location"],
//     });
  
//     new AnimalTable(dogs, "dogs-container", ["species", "name", "size", "location", "image"], {
//       name: "bold",
//       sortable: ["name", "location"],
//     });
  
//     new AnimalTable(bigFish, "fish-container", ["species", "name", "size", "location", "image"], {
//       name: "bold blue",
//       sortable: ["size"],
//     });
//   });
  





















// document.addEventListener("DOMContentLoaded", () => {
//     new AnimalTable(bigCats, "cats-container", ["species", "name", "size", "location", "image"], {
//       name: "bold",
//       sortable: ["species", "name", "size", "location"],
//     });
  
//     new AnimalTable(dogs, "dogs-container", ["species", "name", "size", "location", "image"], {
//       name: "bold",
//       sortable: ["name", "location"],
//     });
  
//     new AnimalTable(bigFish, "fish-container", ["species", "name", "size", "location", "image"], {
//       name: "bold blue",
//       sortable: ["size"],
//     });
//   });
  
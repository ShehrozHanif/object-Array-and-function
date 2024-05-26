//                                    Assignment 03


// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data

let inventory:Mobile[] = []; // Define an Array to store product information

type Mobile = {        //Three seprate products with a properties like name,model,cost,number
    name:string,
    model:string,
    cost:number,
    quantity:number
}

let mobile1:Mobile={
    name:"I-Phone",
    model:"12 Pro-max",
    cost:80000,
    quantity:20
}

let mobile2:Mobile={
    name:"Samsung",
    model:"A-32",
    cost:70000,
    quantity:35
}

let mobile3:Mobile={
    name:"Infinix",
    model:"Hot-40",
    cost:40000,
    quantity:15
}

                          
inventory.push(mobile1)         //Add these three objects in inventory array
inventory.push(mobile2)
inventory.push(mobile3)            
console.log(inventory)         // Console.log to check the inventory Array


console.log("Quantity of the second product ",inventory[1].quantity)   //Access and log the quantity property of a specific product


let mobile4:Mobile={           //Adding more element
    name:"Real-Me",
    model:"HOT-50",
    cost:30000,
    quantity:10
}

inventory.push(mobile4)

// Accessing more element within the inventor array 
let inventoryList = inventory.map(product => `${product.name} - ${product.model}- Cost:${product.cost} - Quantity:${product.quantity}`)
console.log(inventoryList.join("\n"))

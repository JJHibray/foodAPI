console.log ("hello")

fetch("http://localhost:8088/food")
    .then(food => food.json())
    .then(parsedFood => {
        console.table(parsedFood)
    })


"use strict";

const person = {};
    person.firstName = "Jay";
    person.lastName = "Lankford";
    person.sayHello = "Hello from"

        console.log(person.firstName);
        console.log(person.lastName);

        console.log(`${person.sayHello} ${person.firstName} ${person.lastName}`)
console.log('\n'); // Add a newline for better readability

const shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];
    function determineDiscount(shopper) {
        // shopperArray.forEach( => {
        //     let discount;
        //     let totalAfterDiscount;
        //     if(shopper.amount > 200) {
        //         discount = shopper.amount * 0.12;
        //         totalAfterDiscount = shopper.amount * 0.88;
        //     } else {
        //         discount = 0;
        //         totalAfterDiscount = shopper.amount;
        //     }
        //     console.log(`${shopper.name}, your total before discount is $${shopper.amount.toFixed(2)}. You have received a discount of $${discoiunt.toFixed(2)}, and your new total is $${totalAfterDiscount.toFixed(2).}`)
        // });
        if (shopper.amount > 200) {
           let discountAmount = shopper.amount * 0.12;
           shopper.amountPostDiscount = shopper.amount - discountAmount;
           shopper.discount = discountAmount;
        } else {
            shopper.amountPostDiscount = shopper.amount;
            shopper.discount = 0;
        }
    console.log(`Name: ${shopper.name} has spent: $${shopper.amount.toFixed(2)} and earned a discount of $${shopper.discount.toFixed(2)} for a total bill after discount of $${shopper.amountPostDiscount.toFixed(2)} `);
    console.log('\n'); // Add a newline for better readability
    }
 //      determineDiscount(shoppers);
 //       shoppers.forEach(determineDiscount);

const books = [
    {
        title: "Expeditionary Force",
        author: {
            firstName: "Craig",
            lastName: "Alanson"
        }
    },
    {
        title: "Omega Force",
        author: {
            firstName: "Joshua",
            lastName: "Dalzelle"
        }
    },
    {
        title: "Undying Mercenaries",
        author: {
            firstName: "B.V.",
            lastName: "Larson"
        }
    },
    {
    title: "The Silver Ships Series",
        author: {
            firstName: "S.H.",
            lastName: "Jucha"
        }
    },
    {
    title: "Empire Rising Series",
        author: {
            firstName: "D.J.",
            lastName: "Holmes"
    }
}
];
    function BookInfo(books) {
        for (let i = 0; i < books.length; i++) {
            console.log(`Book # ${i + 1}`);
            console.log(`Title: ${books[i].title}`);
            console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
            if(books.length -1 === i) {
                break;
            }
            console.log('----------');
        }
    }
BookInfo(books);

    function createBook(title, authorName) {
        const name = authorName.split(" ");
        return {
            title,
            author: {
                firstName: name[0],
                lastName: name[1]
            }
        }
    }

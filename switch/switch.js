// Jeffrey Osterkamp 7/3/2026

let favMonth = prompt("What is your favorite month?");
//Step 1: Prompt User Input//


// Convert variable to lowercase and compare for output
switch (favMonth.toLowerCase()) {
//Step 2: Add case statements depending on the month.//
    case "january":
    case "february":
    case "december":
        alert("You love the winter months!");
        break;

    case "march":
    case "april":
    case "may":
        alert("Spring is nice with everything blooming.");
        break;

    case "june":
    case "july":
    case "august":
        alert("You enjoy the summer months!");
        break;

    case "september":
    case "october":
    case "november":
        alert("Fall is fun with all of the pretty colors.");
        break;

    default:
        alert("Other months are interesting too!");
}
let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0
totalAnnualExpenses = 0

// Your Code Here
for (i=0 ; i < weeklyExpenseQuestions.length; i++)
{
//window.prompt(weeklyExpenseQuestions[i])
let answer = parseFloat (window.prompt(weeklyExpenseQuestions[i]))
weeklyExpenses = weeklyExpenses + answer
}
for (i=0; i<monthlyExpenseQuestions.length; i++)
{ 
    let monthly = parseFloat (window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + monthly
}
for (i=0; i < annualExpenseQuestions.length; i++)
{
    let annual = parseFloat (window.prompt (annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + annual
}
//totalAnnualExpenses = weeklyExpenses + monthlyExpenses + annualExpenses
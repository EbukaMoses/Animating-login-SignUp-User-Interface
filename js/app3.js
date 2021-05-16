//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //Show loading
    document.getElementById('loading').style.display = 'block';
    
    //Hide results
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResults, 3000);

    e.preventDefault();
});

//calculate Results
function calculateResults(){
    //Ui vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal =parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly payment 
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        //Show loading
        document.getElementById('loading').style.display = 'none';
        
        //Hide results
        document.getElementById('results').style.display = 'block';


        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
       showError('Please Input Some Digits');

    }

}

function showError(error) {
    //Show loading
    document.getElementById('loading').style.display = 'none';
        
    //Hide results
    document.getElementById('results').style.display = 'none';

    //create a div element
    const errorDiv = document.createElement('div');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //Append a content
    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card-body');
    const form = document.querySelector('#loan-form');

    card.insertBefore(errorDiv, form);

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}
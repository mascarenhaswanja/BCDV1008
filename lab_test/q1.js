let balance = 0;

const deposit = (amount) => {
    balance += amount;
    console.log(`Deposit ${amount} into account`);
};

const withdral = (amount) => {
    balance -= amount;
    console.log(`Withdral ${amount} from account`);
}; 

const checkBalance = () => {
    console.log(`The balancece is ${balance}`);
}; 

// Calls functions
checkBalance();
deposit(100);
checkBalance();
withdral(25);
checkBalance();
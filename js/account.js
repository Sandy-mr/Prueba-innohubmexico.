
console.log('-----JSON Account Updater----')
var accounts = {
    "Accounts": [
        {
            "Id": 21,
            "Name": "John Shepherd",
            "LogonCount": 12,
            "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
        },
        {
            "Id": 22,
            "Name":"Steven cool",
            "LogonCount": 20,
            "LastLogon": new Date(2017, 1, 13, 16, 15, 6, 111)
        },
        {
            "Id": 23,
            "Name": "brand stark",
            "LogonCount": 4,
            "LastLogon": new Date(2017, 1, 14, 16, 15, 6, 111)
        }
    ]
}

var logons = {
    "Logons": [
        {
            "Id": 21,
            "Name": "John Shepherd test",
            "Date": new Date(2017, 1, 15, 16, 15, 6, 111)
        },
        {
            "Id": 24,
            "Name": "Cristhoper cole",
            "Date": new Date(2017, 1, 14, 16, 15, 6, 111)
        },
        {
            "Id": 23,
            "Name": "",
            "Date": new Date(2017, 1, 16, 16, 15, 6, 111)
        }

    ]
}


function updateAccount(accounts,logons){

    for (let index = 0; index < logons.length; index++) {

        if(accounts.findIndex(x => x.Id == logons[index].Id) !== -1){
            let indexAccounts = (accounts.findIndex(x => x.Id == logons[index].Id ))
            accounts[indexAccounts].LogonCount ++;
        }
     
        if(accounts.findIndex(x => x.Id == logons[index].Id) == -1){
                logons[index].LogonCount = 1;
                logons[index].LastLogon =  logons[index].Date;
                delete  logons[index].Date;
                accounts.push(logons[index]);
        }
        
        if(logons[index].Date){
            if(accounts.findIndex(x => x.LastLogon.getTime() < logons[index].Date.getTime() && x.Id == logons[index].Id) !== -1){
                let indexAccounts = (accounts.findIndex(x => x.LastLogon.getTime() < logons[index].Date.getTime()&& x.Id == logons[index].Id ))
                accounts[indexAccounts].LastLogon = logons[index].Date;

                if(logons[index].Name !== ''){
                    accounts[indexAccounts].Name = logons[index].Name;
                }
            }
        }
    }
    return  accounts; 
}

console.log(updateAccount(accounts.Accounts,logons.Logons))

// The updates must follow this pattern:
// Accounts are matched with the logon information by the`"Id"` fields.
// If an account matches a logon, The`"LogonCount"` is incremented with 1.
// If`"Id"` is not found, a new account will be added with all available information where`"LogonCount"` is set to 1.
// If`"LastLogon"` is older than the logon`"Date"` it will be set to the logon`"Date"`.
//     If`"LastLogon"` is older than the logon`"Date",` the`"Name"` will be set to the logon`"Name"` when not empty.
// Accounts are returned ordered by`"Id"` ascending, but they are not necessarily ordered when they are passed as a parameter.
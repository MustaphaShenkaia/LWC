public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

        List<Account> accList = [SELECT Id, Name FROM Account LIMIT 5 with SECURITY_ENFORCED]; 
        return accList; 
    }
}
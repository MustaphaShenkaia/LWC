public with sharing class ComboboxExample {
    
    @AuraEnabled
    public static List<Account> getAccounts(){
        try {
            return [SELECT Id, Name FROM Account LIMIT 10]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
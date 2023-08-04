public with sharing class CreateAccountLWC {
    
    @AuraEnabled
    public static String createAccount(String accName){

        try {

            Account acc = new Account(); 
            acc.Name = accName; 
            insert acc; 
            
            if (acc.Id != null) {
                return 'SUCCESS'; 
            } else {
                return 'FAIL'; 
            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
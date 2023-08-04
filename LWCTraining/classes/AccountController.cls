public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

        List<Account> accList = [SELECT Id, Name FROM Account];
        return accList; 
    }

    
    //----------------------------------------------------
    

    @AuraEnabled(cacheable=true)
    public static List<Account> accountFilter(String accName){

        try {
            // string acc ='%'+accName+'%' ;
            // string sorgu ='SELECT id , Name FROM Account WHERE name LIKE '+ acc;
            String sorgu = 'SELECT id,name FROM account WHERE name LIKE \'%'+ accName +'%\' ';
            return Database.query(sorgu);
     
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    
     //----------------------------------------------------
    
	
    // AccountController.accountFilterImperative('ene'); 
    @AuraEnabled // Imperative yöntem ile cacheale kullanılmaz. 
    public static List<Account> accountFilterImperative(String accName){

        try {
            // string acc ='%'+accName+'%' ;
            // string sorgu ='SELECT id , Name FROM Account WHERE name LIKE '+ acc;
            String sorgu = 'SELECT id,name FROM account WHERE name LIKE \'%'+ accName +'%\' ';
            return Database.query(sorgu);
     
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}
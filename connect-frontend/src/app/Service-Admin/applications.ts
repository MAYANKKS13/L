export interface Applications {
  borrowerId: string
firstName: string
lastName: string
address: Address
emailId: string
phoneNumber: string
dateOfBirth: string
gender: string
displayName: string
status:string
loanDetails: LoanDetails;
}
export interface Address {
  street: string
  zipCode: string
  villageOrCity: string
  district: string
  state: string
  country:string
}
export interface LoanDetails{
  amount: any;
  tenure: any;

}

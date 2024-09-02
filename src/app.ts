// Importação das classes
import { PeopleAccount } from "../class/PeopleAccount";
import { CompanyAccount } from "../class/CompanyAccount";
import { InfinityAccount } from "../class/InfinityAccount";

// Criação de instâncias das contas
const personalAccount = new PeopleAccount(1234567890, "John Doe", 12345);
const companyAccount = new CompanyAccount("Tech Corp", "Jane Doe", 67890);
const infinityAccount = new InfinityAccount("Alice", 54321);

// Operações nas contas
personalAccount.deposit(100);
personalAccount.withdraw(101);
companyAccount.getLoan(1000);
infinityAccount.deposit(100);

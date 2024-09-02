// Classe CompanyAccount
import { Account } from "../class/Account";

export class CompanyAccount extends Account {
	companyName: string;
	constructor(companyName: string, name: string, accountNumber: number) {
		super(name, accountNumber);
		this.companyName = companyName;
	}

	getLoan = (amount: number): void => {
		if (!this.validateStatus()) {
			console.log(`Empréstimo negado. Status da conta: inativa.`);
			return;
		}
		const currentBalance = this.getBalance();
		this.setBalance(currentBalance + amount);
		console.log(
			`Empréstimo de ${amount} concedido para ${
				this.companyName
			}. Novo saldo: ${this.getBalance()}`
		);
	};
}

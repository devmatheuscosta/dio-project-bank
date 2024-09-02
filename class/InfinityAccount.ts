// Classe InfinityAccount
import { Account } from "../class/Account";

export class InfinityAccount extends Account {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	deposit = (amount: number): void => {
		this.setBalance(this.getBalance() + amount + 10);
		console.log(
			`Depósito de ${amount} + bônus realizado com sucesso. Novo saldo: ${this.getBalance()}`
		);
	};
}

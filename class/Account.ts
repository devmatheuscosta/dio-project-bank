// Classe abstrata Account
export abstract class Account {
	constructor(
		private readonly name: string,
		private readonly accountNumber: number,
		private balance: number = 0,
		private status: boolean = true
	) {}

	getName = (): string => {
		return this.name;
	};

	getAccountNumber = (): number => {
		return this.accountNumber;
	};

	deposit = (amount: number): void => {
		if (!this.validateStatus()) {
			console.log("Operação não permitida: Conta inativa.");
			return;
		}
		this.balance += amount;
		console.log(
			`Depósito de ${amount} realizado com sucesso. Novo saldo: ${this.balance}`
		);
	};

	withdraw = (amount: number): void => {
		if (!this.validateStatus()) {
			console.log("Operação não permitida: Conta inativa.");
			return;
		}
		if (!this.canWithdraw(amount)) {
			console.log("Saldo insuficiente para realizar o saque.");
			return;
		}
		this.balance -= amount;
		console.log(
			`Saque de ${amount} realizado com sucesso. Novo saldo: ${this.balance}`
		);
	};

	private canWithdraw = (amount: number): boolean => {
		return amount <= this.balance;
	};

	validateStatus = (): boolean => {
		return this.status;
	};

	setBalance = (balance: number): void => {
		this.balance = balance;
	};

	getBalance = (): number => {
		return this.balance;
	};

	printBalance = (): void => {
		console.log(`Seu saldo atual é de ${this.getBalance()}.`);
	};
}

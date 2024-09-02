// Classe PeopleAccount
import { Account } from "../class/Account";

export class PeopleAccount extends Account {
	private docId: number;
	constructor(docId: number, name: string, accountNumber: number) {
		super(name, accountNumber);
		this.docId = docId;
	}

	setDocId = (docId: number): void => {
		this.docId = docId;
	};

	getDocId = (): number => {
		return this.docId;
	};
}

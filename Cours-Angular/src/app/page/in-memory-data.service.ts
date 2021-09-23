import { InMemoryDbService } from 'angular-in-memory-web-api';
import {CONTACTS} from "./contact/contact.mock";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contact = CONTACTS;
        return { contact };
    }
}

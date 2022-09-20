interface Worker{
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
}

enum Category{
    BusinessAnalyst = 1,
    Developer,
    Designer,
    QA,
    ScrumMaster
}

function getAllWorkers(){
    const workers = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA}
    ]
    return workers;
}

function logFirstAvailable(arr: any = getAllWorkers()){
    console.log(`Array size ${arr.length}`);
    const availableWorkers = arr.filter((t: Worker) => t.available === true);
    console.log(`${availableWorkers[0].name} ${availableWorkers[0].surname}`);
}

function getWorkersNamesByCategory(arr: any, category: Category = Category.Designer): Array<string>{
    return arr.filter((t: Worker) => t.category === category).map((t: Worker) => t.surname);
}

function logWorkersName(arr: string[]) : void{
    console.log(arr);
}

const outputWorkers = (arr: any) => arr.forEach((t: Worker) => {
    console.log(`${t.name} ${t.surname}`);
});

const getWorkerByID = (id: number, arr: any) => arr.find((t: Worker) => t.id === id);

function createCustomerId(customerName: string, customerId: number): string{
    return customerName + customerId;
}

function createCustomer(name: string, age?: number, city?: string){
    let result = `${name} `;
    if(age !== null || age !== undefined) result += `${age} `;
    if(city !== null || city !== undefined) result += `${city}`;
    console.log(result);
}

function сheckoutWorkers(customer: string, workerIds: number[]){
    const allWorkers = getAllWorkers();
    let result: Worker[] = [];
    workerIds.forEach((t: number) => {
        const worker = getWorkerByID(t, getAllWorkers());
        if(worker.available === true) result.push(worker);
    });
    console.log(customer);
    return result;
}

const idGenerator: typeof createCustomerId = (customerName: string, customerId: number) => customerName + customerId;

const workers = getAllWorkers();
logFirstAvailable(workers);
const workerSurnames = getWorkersNamesByCategory(workers, Category.Developer);
logWorkersName(workerSurnames);
outputWorkers(workers);
console.log(getWorkerByID(1, workers));
const myID: string = createCustomerId('Ann', 10);
console.log(myID);
console.log(idGenerator('Petro', 96));
logWorkersName(getWorkersNamesByCategory(workers));
logFirstAvailable();
const myWorkers = сheckoutWorkers('Ann', [1,2,4]);
console.log(myWorkers);
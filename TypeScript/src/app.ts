type  User= {firstname: string, age: number}
const user: User = {firstname: 'Kévin', age: 20}

const animal: {firstname: string, age?: number} = {firstname: 'Nesko', age: 20}
const a: string = 'Salut tout le monde'
const n: number = 11
const b: boolean = true
const d: null = null
const array: string[] = ['abc','def','ghi']
const date: Date = new Date();
const sb: Function = (e: MouseEvent):void => {}
function printId(id: number | string ) {
    console.log(id.toString());
}

function identity(arg: any): any {
    return arg;
}
const aa = identity(3); // aa de type any. aa à perdue le type rentrer en parametre 

function identity2<ArgType>(arg: ArgType): ArgType {
    return arg;
}
const bb = identity2<number>(3); // number va remplacer ArgType et docn va comprendre que le parametre est un number
const bc = identity2(3); // peut aussi le comprendre tout seul

const compteur = document.querySelector('#compteur') as HTMLButtonElement
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span')
    if (span){
        span.innerText = i.toString()
    }
}

compteur?.addEventListener('click', increment);
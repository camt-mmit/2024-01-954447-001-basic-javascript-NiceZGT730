import readline from 'node:readline';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface(stdin, stdout); 


rl.question('Input your Score: ', (grade) => {
   rl.write(`Hello ${grade}\n`); 
    rl.close();
});

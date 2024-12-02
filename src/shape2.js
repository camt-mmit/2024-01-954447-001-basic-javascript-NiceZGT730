import readline from 'node:readline';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface(stdin, stdout); 


rl.question('Input your Score: ', (input) => {
    const shape = parseFloat(input);
    
    for (let j = 1; j <= shape; j++) {
       
        for ( let i = 1; i <= j; i++) {
            rl.write(`*`); 
        }
        rl.write('\n'); 
    }
    rl.close();
});
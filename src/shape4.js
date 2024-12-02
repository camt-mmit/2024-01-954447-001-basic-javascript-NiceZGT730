import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input size: ', (input) => {
    const size = parseInt(input); 

    if (isNaN(size) || size <= 0) {
        rl.write('Invalid input. Please enter a positive integer.\n');
    } else {
        for (let i = 0; i < size; i++) {
            let row = '';
            for (let j = 0; j < size; j++) {
    
                if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                    row += '*';
                } else {
                    row += ' ';
                }
            }
            rl.write(row + '\n'); 
        }
    }

    rl.close(); 
});

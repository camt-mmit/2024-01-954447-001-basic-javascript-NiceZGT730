import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input size: ', (input) => {
    const size = parseInt(input);

   
    for (let i = 1; i <= size; i++) {
        let row = '';


        for (let j = 0; j < size - i; j++) {
            row += ' ';
        }

        if (i === 1) {
            row += '*';
        } else {
            row += '*';
            for (let j = 0; j < 2 * i - 3; j++) {
                row += ' ';
            }
            row += '*';
        }

        rl.write(row + '\n'); 
    }

    for (let i = size - 1; i >= 1; i--) {
        let row = '';

        for (let j = 0; j < size - i; j++) {
            row += ' ';
        }

        if (i === 1) {
            row += '*';
        } else {
            row += '*';
            for (let j = 0; j < 2 * i - 3; j++) {
                row += ' ';
            }
            row += '*';
        }

        rl.write(row + '\n'); 
    }

    rl.close();
});

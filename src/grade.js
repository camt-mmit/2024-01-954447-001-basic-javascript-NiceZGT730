import readline from 'node:readline';
import { stdin, stdout } from 'node:process';
const rl = readline.createInterface(stdin, stdout); 


rl.question('Input your Score: ', (input) => {
    const grade = parseFloat(input);
    
    if(grade >=80){
        rl.write(`Grade A\n`); 
    }
    else if(grade >=70){
        rl.write(`Grade B\n`); 
    }
    else if(grade >=60){
        rl.write(`Grade C\n`); 
    }
    else if(grade >=50){
        rl.write(`Grade D\n`); 
    }
    else{
        rl.write(` F\n`); 
    }
  
    rl.close();
});
const add = require('./add')
const read = require('./read')

const cmd = process.argv;

 {

    const note = { 
        Employee: cmd[2],
        Role: cmd[3],
        Department: cmd[4]

       
    }
    const oldNote = read()
   

    add(note,oldNote);
    
}

if(cmd[2] === 'read') {
    // Import present
    const present = require('./present')
    
    present(read())
}

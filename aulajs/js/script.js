// Nullish Coalescing Operator ??
//  sinais no js  " && "  = and (e)  " || " = or (ou)

// const idade = null;
// Operador 'OR'   '||'    
//  são valores inválidos  0, '', [], false, undefined, ==> falsy
//  usando o Operator ??
// document.body.innerText = 'Sua idade é ' + ( idade || 'Não informado');
// document.body.innerText = 'Sua idade é ' + ( idade ?? 'Não informado');

// Objetos JSON
const user = {
    name: 'Fernando',
    idade: 51,
    address: {
        street: 'Rua Sacramento',
        number: 490,
    }
}
document.body.innerText = JSON.stringify(user);

 // alt + shift +  seta para baixo, comando para copiar a linha de cima inteira na  linha de baixo
document.body.innerText = Object.keys(user);  
document.body.innerText = Object.values(user);

// alguns métodos de objetos
document.body.innerText = ('name' in user);
document.body.innerText = ('nickname' in user);

// estrutura dos dados
document.body.innerText = JSON.stringify(Object.values(user));
document.body.innerText = JSON.stringify(Object.entries(user));

// desestruturação 
// conseguir remover parte do objeto para uma variável
// const { address } = user
// document.body.innerText = JSON.stringify(address);

// const { address, idade } = user
// document.body.innerText = JSON.stringify({address, idade})



// isso não é destruturação, 
// const address = user.address 


// gambiara
const { address, idade, nickname = 'Senac' } = user
document.body.innerText = JSON.stringify({address, idade, nickname})

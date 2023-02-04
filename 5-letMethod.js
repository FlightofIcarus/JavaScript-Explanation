// The let type's variable is a new method to declare a variable. It is interpretated and processated by latests web browsers. Your syntax are equal as the other types of variables (Var and Const). Variable's key-word let, your variable's name, the operational symbol of value declarations (=) and his value. It receives every types of values (Strings, numbers and booleans), and differs of var variables in web browsers by receptivite and by your elevation in variables escopes. In escope section i'll explain this better.
// The let may have your value reatribuited only call your name and using a value atribuition (= new variable value) without need use the key-word again.

let newVariable = 0 /* A let has created with 0 in your value. */

console.log(newVariable) /* This command result in 0 printed in console. */

newVariable = 5 /* The newVariable have you value changed for 5. */

console.log(newVariable) /* This command result in 5 printed in console, because your value has changed in before step. */

// If you create a let in a global escope, it has acessed by all project's components.
// If you create a let in block escope (Inner of Ifs and Switchs, for exemple), it not will elevated how a var, equal if you create a let in function escope, it not will elevated.

let a = "Global escope"
console.log(a); /* The variable a will be acessed because it is in same escope. */

if (true) {
    console.log(a); /* The variable a will be acessed by if, because the variable is in global escope. */
    let b = "Block escope"
    console.log(b); /* The variable b will be acessed because it is in same escope. */
}

console.log(b); /* The variable b not will be acessed because it hasen't elevated to global escope. */

function functionEscope() {
    console.log(a); /* The variable a will be acessed by if, because the variable is in global escope. */
    console.log(b); /* The variable b not will be acessed because it hasen't elevated to global escope. */
    let c = "Function escope"
    console.log(c); /* The variable c will be acessed because it is in same escope. */
}

console.log(c); /* The variable c not will be acessed because it is in function escope and hasen't elevated to global escope. */

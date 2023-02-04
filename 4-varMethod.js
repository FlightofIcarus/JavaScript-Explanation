// The var type's variable is the most antique method to declare a variable. Since 1995, and it is interpretated and processated by every web browsers. Your syntax are equal as the other types of variables (Let and Const). Variable's key-word var, your variable's name, the operational symbol of value declarations (=) and his value. It receives every types of values (Strings, numbers and booleans), and differs of others variables in web browsers by receptivite and by your elevation in variables escopes. In escope section i'll explain this better.
// The var may have your value reatribuited only call your name and using a value atribuition (= new variable value) without need use the key-word again.

var newVariable = 0 /* A var has created with 0 in your value. */

console.log(newVariable) /* This command result in 0 printed in console. */

newVariable = 5 /* The newVariable have you value changed for 5. */

console.log(newVariable) /* This command result in 5 printed in console, because your value has changed in before step. */

// If you create a var in a global escope, it has acessed by all project's components.
// If you create a var in block escope (Inner of Ifs and Switchs, for exemple), it'll elevated in one step. From block to imediatally superior escope. But if you create a var in function escope, it not will elevated.

var a = "Global escope"
console.log(a); /* The variable a will be acessed because it is in same escope. */

if (true) {
    console.log(a); /* The variable a will be acessed by if, because the variable is in global escope. */
    var b = "Block escope"
    console.log(b); /* The variable b will be acessed because it is in same escope. */
}

console.log(b); /* The variable b will be acesse because it has elevated to global escope (hoisting). */

function functionEscope() {
    console.log(a); /* The variable a will be acessed by if, because the variable is in global escope. */
    console.log(b); /* The variable b will be acesse because it has elevated to global escope (hoisting). */
    var c = "Function escope"
    console.log(c); /* The variable c will be acessed because it is in same escope. */
}

console.log(c); /* The variable c not will be acessed because it is in function escope and hasen't elevated to global escope. */

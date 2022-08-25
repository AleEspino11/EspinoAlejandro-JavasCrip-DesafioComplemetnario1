/*Hay 5 oportunidades para ingresar y el usuario y la contraseña, si no se bloquea el ingreso
Si ingresa los datos correctos sale del bucle*/

let usuario = "Alejandro";
let contraseña = 123456;
let acceso = 0;

    
      for(i=1; i<=5; i++){
            let user = prompt("ingrese el Usuario")
            let pass = parseInt(prompt("Ingresa la contraseña"));

            if(user === usuario){  
            if(pass === contraseña){

                    alert( `Bienvenido ${user}`);
                    acceso = 1;
                    break;
                        }
             
            }
            

            else { 
                  alert("Usuario o contraseña incorrectos");
                  
            }

            if(i===5) {
                  alert("Usuario bloqueado");
            }          
      }
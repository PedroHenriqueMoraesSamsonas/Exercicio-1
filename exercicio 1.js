

let N1 = prompt("Coloque um numero: ");
let N2 = prompt("Coloque outro numero numero: ");

N1 = Number(N1);
N2 = Number(N2);

let multi = confirm("É uma multiplação ?");

if(multi == true){

 alert(`A multiplicação de: ${N1} e de: ${N2} foi de: ${N1 * N2}`);
} else{

    let divi =  confirm("É uma divisão ?");
        if(divi == true){
            alert(`A divisão de: ${N1} e de: ${N2} foi de: ${N1 / N2}`);

        }else{
            let soma = confirm("É uma soma ?");
                if(soma == true){
                    alert(`A soma de: ${N1} e de: ${N2} foi de: ${N1 + N2}`);
                    }else{
                        let sub = confirm("É uma subtração ?");
                            if(sub == true){
                                alert(`A subtração de: ${N1} e de: ${N2} foi de: ${N1 - N2}`);
                              }else{
                                let poten = confirm("É uma potencia ?");
                                if(poten == true){
                                    alert(`A potencia de: ${N1} e de: ${N2} foi de: ${N1 ** N2}`);
                                }else{ 
                                    alert("Se c qué da c fala!!!!");
                                }
                            }
                            
                           
                    }
            
     }
 }

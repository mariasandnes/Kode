function regnut() {
    let tall1 = Number(document.getElementById("tall1").value) 
    let tall2 = Number(document.getElementById("tall2").value)
    let op = document.getElementById("operator").value

    console.log(tall1,tall2,op)
let svar = 0
    if (op =="+"){
    svar=tall1+tall2
    }
    else if(op =="-"){
        svar=tall1-tall2
    }
    else if(op=="*"){
        svar=tall1*tall2
    }
    else if(op=="/"){
        svar=tall1/tall2
    }
    console.log(svar)

    //Oppretter nytt element
    let p = document.createElement("p")
    p.textContent=svar
    document.getElementById("utskrift").appendChild(p)
}

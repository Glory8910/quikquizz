

let totalscore=localStorage.getItem("score")


let crelement = (eleme, idname, classgiven) => {



    let elename = document.createElement(eleme);
    elename.id = idname;
    elename.className = classgiven;





    return elename;



}




let ddiv = crelement("div", "display", "contt container")

let scorecard=crelement("div","scorecard","scl")

scorecard.innerHTML=`Your Score :  ${totalscore}`

document.body.append(ddiv)

ddiv.append(scorecard)


let form=crelement("form","formdata","formcl form-control inp contt")
ddiv.append(form)

let NameOfUser=crelement("input","username","form-control  ")
NameOfUser.placeholder="Enter your Name"

let save=crelement("button","saveScoreBtn","btn savecl ")
save.innerHTML="Save"


form.append(NameOfUser)



let playagain=crelement("a","playagain"," btn  plcl ")
playagain.innerHTML="Play Again"
playagain.href="game.html"

let goHome=crelement("a","goHome","btn gohmecl")
goHome.innerHTML="Go Home"
goHome.href="index.html"


ddiv.append(save,playagain,goHome)



save.disabled=true;

let getname=(e)=>{
    e.preventDefault();

  

    let name=document.getElementById("username").value



    if(name!==""  && name!==null){
     
        localStorage.setItem(`${name}`,totalscore)
    
    }

}

let getdata=(e)=>{
    console.log(NameOfUser.value,NameOfUser)
    save.disabled=false;
}



let getinp=document.getElementById("saveScoreBtn").addEventListener("click",(e)=>getname(e))

let namecomm=document.getElementById("username").addEventListener("change",(e)=>getdata(e))




let crelement=(eleme,idname,classgiven)=>{

  

   
    let elename=document.createElement(eleme);
    elename.id=idname;
    elename.className=classgiven;

    



return elename;



}


let cee=crelement("div","cont","container contt")

document.body.append(cee);







let quizHeader=crelement("h1","heading","head");
quizHeader.innerHTML="Quick Quizzz"

let btndiv=crelement("div","btnholder","d-grid gap-2 md-block divcont")


let playlink=crelement("a","playpage","linkpage btn btn-primary sizeadj")
playlink.setAttribute("href","game.html")


playlink.innerHTML="Play"



let scorelink=crelement("a","playpage","linkpage btn btn-primary sizeadj")
scorelink.setAttribute("href","highscore.html")
scorelink.innerHTML="High Scores"




btndiv.append(playlink,scorelink)



let containerel=document.getElementById("cont");
cont.append(quizHeader,btndiv)






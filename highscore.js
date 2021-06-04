
let totalscore=localStorage.getItem("score")


let crelement = (eleme, idname, classgiven) => {

   

    let elename = document.createElement(eleme);
    elename.id = idname;
    elename.className = classgiven;





    return elename;



}






let highscoredisplaydiv = crelement("div", "displayscore", "contt container")


document.body.append(highscoredisplaydiv)

let scores=localStorage.getItem("scoreobjj")



let tot=JSON.parse(scores)



let keys=Object.keys(localStorage)


let neededkeys=keys.filter((el)=>el!=="score")
let newobj={}




neededkeys.map((el)=>{

    newobj[el]=localStorage[el]

})



const sortable = Object.entries(newobj)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});


for (const key in sortable) {
    if (Object.hasOwnProperty.call(sortable, key)) {
        const element = sortable[key];

        highscoredisplaydiv.innerHTML+=`<div class="scoredisp">${key} - ${element}</div>`

        
    }
}

let goHome=crelement("a","goHome","btn gohmecl")
goHome.innerHTML="Go Home"
goHome.href="index.html"

highscoredisplaydiv.append(goHome)
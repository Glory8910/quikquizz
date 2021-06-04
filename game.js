

let crelement = (eleme, idname, classgiven) => {



    let elename = document.createElement(eleme);
    elename.id = idname;
    elename.className = classgiven;





    return elename;



}




let ddiv = crelement("div", "display", "contt")

let scoreadd=0;
let cee = crelement("div", "cont", "container contt")

document.body.append(ddiv, cee);


let url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"


async function datafetch(url) {
 
    let datacall = await fetch(url)
    let jsondata = await datacall.json()
    let data = jsondata.results
  

    showdata(data)

    return jsondata.results
}

datafetch(url);

let sum = 0;
let showdata = (data) => {




    let showoneques = (enq) => {
  
       



        data[enq];
    
        let el = data[enq]
        let ind = enq

        let qno = ind + 1;

        let diplaydiv = crelement("div", "display", "contt container")
        ddiv.append(diplaydiv)

        let holder = crelement("div", "hold", 'row')

        let qnoel = crelement("span", "progresstext", "quesnum col-10");

        qnoel.innerHTML = `Question ${qno}/10`



        let scoreboard = crelement("span", "scoreboard", "col-2")

        let scorelable = crelement("div", "scorelable", "col-12 scoreele")
        scorelable.innerHTML = "Score"

        let score = crelement("div", `scoreno${ind}`, "col-12 scoreele")
        score.innerHTML =sum

        scoreboard.append(scorelable, score)

        holder.append(qnoel, scoreboard)

        let progressdiv = crelement("div", "progressdiv", "progress progcl")


        let progressbar = crelement("div", "progressbar", "progress-bar progbarcl")

        progressbar.setAttribute("role", "progressbar")

        progressbar.setAttribute("aria-valuenow", `${qno * 10}`)

        progressbar.setAttribute("aria-valuemax", 100)

        progressbar.setAttribute("aria-valuemin", 0)

        progressbar.style.width = `${qno * 10}%`




        progressdiv.append(progressbar)




        let ques = crelement("div", "ques", "quescl")
        ques.innerHTML = `${el.question}`

        let correct = el.correct_answer

        let optdiv = crelement("div", "optcont", "optcontcl d-grid gap-2 md-block ")

        let optarr = [el.correct_answer, ...el.incorrect_answers]
    

        for (let i = 0; i < optarr.length; i++) {
            let randnum = Math.floor(Math.random() * optarr.length)
            let temp = ""
            let current = optarr[i];

            temp = current;
            optarr[i] = optarr[randnum];
            optarr[randnum] = temp




        }
      

        let selectedoption = ""

        for (i = 0; i < optarr.length; i++) {


            let option = crelement("button", `${ind}${i + 1}opt`, "options btn ")




            if (i == 0) {
                option.innerHTML = `<span class="opp">A</span> ${optarr[i]}`
                option.value = `${optarr[i]}`
            }
            if (i == 1) {
                option.innerHTML = `<span class="opp">B</span> ${optarr[i]}`
                option.value = `${optarr[i]}`

            }
            if (i == 2) {
                option.innerHTML = `<span class="opp">C</span> ${optarr[i]}`
                option.value = `${optarr[i]}`

            }
            if (i == 3) {
                option.innerHTML = `<span class="opp">D</span> ${optarr[i]}`
                option.value = `${optarr[i]}`

            }

            optdiv.append(option)
           diplaydiv.append(holder)
            diplaydiv.append(progressdiv, ques, optdiv)


            let getselectionopt = (e) => {
                selectedoption = e.target.value
               
            }



            let even = document.getElementById(`${ind}${i + 1}opt`).addEventListener("click", (e) => getselectionopt(e))


        }



        let nextbtn = crelement("button", "next", "btn nextt")
        nextbtn.innerHTML = "Submit"

        diplaydiv.append(nextbtn)

        nextbtn.addEventListener("click", e => submitopt(e))


        let submitopt = (e) => {

         

            if (correct === selectedoption) {
               

             
                    sum += 10;
                   
                 
                    score.innerHTML=sum
            


            }
            else if(correct!==selectedoption){
                score.innerHTML=sum;
            }


           localStorage.setItem("score",sum)

            
            if (enq < data.length-1  && selectedoption!=="") {
                enq++;
            
            
              
                diplaydiv.innerHTML=``;
                showoneques(enq);
            }
            else if(enq >= data.length-1){

               
                    nextbtn.disabled=true

                   cee.innerHTML=`<a class="nextpage btn" href="end.html">Game over end page</a>`


            }


          
          
        }

  

    }

    showoneques(0);

  

   

}









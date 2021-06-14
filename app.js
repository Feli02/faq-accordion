window.addEventListener('load', function(){

    let q1 = document.getElementById('question-1')
    let q2 = document.getElementById('question-2')
    let q3 = document.getElementById('question-3')
    let q4 = document.getElementById('question-4')
    let q5 = document.getElementById('question-5')

    let details1 = document.getElementById('detail-1')
    let details2 = document.getElementById('detail-2')
    let details3 = document.getElementById('detail-3')
    let details4 = document.getElementById('detail-4')
    let details5 = document.getElementById('detail-5')
    

    //open one at the same time
    q1.addEventListener('click', function(){
        details2.removeAttribute("open");
        details3.removeAttribute("open");
        details4.removeAttribute("open");
        details5.removeAttribute("open");
    })


    q2.addEventListener('click', function(){
        details1.removeAttribute("open");
        details3.removeAttribute("open");
        details4.removeAttribute("open");
        details5.removeAttribute("open");
    })


    q3.addEventListener('click', function(){
        details1.removeAttribute("open");
        details2.removeAttribute("open");
        details4.removeAttribute("open");
        details5.removeAttribute("open");
    })

    q4.addEventListener('click', function(){
        details1.removeAttribute("open");
        details2.removeAttribute("open");
        details3.removeAttribute("open");
        details5.removeAttribute("open");
    })

    q5.addEventListener('click', function(){
        details1.removeAttribute("open");
        details2.removeAttribute("open");
        details3.removeAttribute("open");
        details4.removeAttribute("open");
    })

})
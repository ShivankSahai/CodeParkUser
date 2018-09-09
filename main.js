let articles = document.querySelector('#articles')
let projects = document.querySelector('#projects')
let questions = document.querySelector('#questions')
let articles_button = document.querySelector('#feed_articles')
let projects_button = document.querySelector('#feed_projects')
let questions_button = document.querySelector('#feed_questions')

window.onload=()=>{
    articles.style.display="block"

}
articles_button.addEventListener('click',(e)=>{
    articles.style.display = "block"
    projects.style.display = "none"
    questions.style.display = "none"
})
projects_button.addEventListener('click', (e) => {
    articles.style.display = "none"
    projects.style.display = "block"
    questions.style.display = "none"
})
questions_button.addEventListener('click', (e) => {
    articles.style.display = "none"
    projects.style.display = "none"
    questions.style.display = "block"
})

document.querySelector('#fbu').addEventListener('click',(e)=>{
    if(e.target.innerText===' Follow')
    {
        e.target.innerHTML ='<i class="fa fa-check"></i> Following'
    }
    else if (e.target.innerText === ' Following')
    {
        e.target.innerHTML ='<i class="fa fa-user-plus"></i> Follow'
    }
})

document.querySelector('#ask_question').addEventListener('click',(e)=>{
    document.querySelector('#question_box').style.display="block"
})
document.querySelector('#ask').addEventListener('click',(e)=>{
    document.querySelector('#thank_you').style.display="block"
    document.querySelector('textarea').value=''
})
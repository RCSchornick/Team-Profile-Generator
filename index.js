const Manager = require ('./lib/Manager.js')
const Intern = require ('./lib/Intern.js')
const Engineer = require ('./lib/Engineer.js')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateTeam = require('./src/html.js')

const pathToDist = path.resolve (__dirname, "dist")
const fileToDist = path.join (pathToDist, "team.html")

const teamArray = []



function startApp(){

    inquirer.prompt([ 
        {
            type:"input", 
            name:"managerName",
            message:"What is the name of the manager?",

        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the office number of the manager?",
        },
        {
            type:"input",
            name:"Id",
            message:"What is the Id of the manager?",
        },
        {
            type:"input",
            name:"email",
            message:"What is the email of the manager?"
        },
    ]).then(response =>{
        const manager= new Manager (response.managerName, response.officeNumber, response.Id, response.email);
        teamArray.push(manager)
        console.log(teamArray)
        addTeamMember()
    })
function addTeamMember(){
    inquirer.prompt([
        {
            type:"list",
            name:"addMember",
            choices:["Engineer", "Intern", "N/A"],
            message:"What kind of team member are you adding?"
        },
    ]).then(response => {
        if (response.addMember === "Engineer"){addEngineer()} 
    else if (response.addMember === "Intern"){addIntern()}
    else  { createTeamCards()}
    })
    }


function addIntern(){
    inquirer.prompt([
        {
            type:"input",
            name:"employeeName",
            message:"What is the name of the employee?",
        },
        {
            type:"input",
            name:"Id",
            message:"What is the Id of the employee?",
        },
        {
            type:"input",
            name:"email",
            message:"What is the email of the employee?",
        },
        {
            type:"input",
            name:"school",
            message:"What school did the intern attend?",
        },
    ])
    .then(response =>{
        //addIntern()
        const intern= new Intern (response.employeeName, response.Id, response.email, response.school);
        teamArray.push(intern)
        console.log(teamArray)
        addTeamMember()})

}


function addEngineer(){
inquirer.prompt([
    {
        type:"input",
        name:"employeeName",
        message:"What is the name of the employee?",
    },
    {
        type:"input",
        name:"Id",
        message:"What is the Id of the employee?",
    },
    {
        type:"input",
        name:"email",
        message:"What is the email of the employee?",
    },
    {
        type:"input",
        name:"github",
        message:"What is the github username of the employee?",
    },
]).then(response =>{
   
        //addEngineer()
        const engineer= new Engineer (response.employeeName, response.Id, response.email, response.github);
        teamArray.push(engineer)
        console.log(teamArray)
        addTeamMember()})

}
        function createTeamCards(){
            fs.writeFileSync(fileToDist, generateTeam(teamArray),"utf-8", (err)=>{
                if(err) throw err
            })
        }


}




startApp()
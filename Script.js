
let projectCons = document.getElementById("projectcontainer");

let techlanguageContainer = document.getElementById("techlanguageContainer");

const projectData = [
  {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"]
  },

   {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const techStacklanguage  =[
  {
    category:"Frontend",
    technologies: ["HTML", "CSS", "Javascript", "React", "TailwindCSS", "Bootstrap" ]
  },
  {
    category:"Backend",
    technologies: ["PHP"]
  },
  {
    category:"Tools",
    technologies: ["Figma", "Git", "Github", "Linux" ]
  }
]

function createTechStacks(techslang){
  const stackspans = techslang.technologies.map((langs) => `<span>${langs}</span>`).join("");

  return`
        <div class="techtitle">
             ${techslang.category}  
         </div>

         <div class="technologies">
              ${stackspans}              
        </div>
  `
}


function createProjectCard(project) {
  const techSpans = project.techstack.map((tech) => `<span>${tech}</span>`).join("");

  return `
    <div class="project">
            <div class="projectSnapshot" style="background-image: url('${project.snapshot}')">

            </div>

            <div class="projectDescription">
                <div class="projecttitle">
                    ${project.title}
                 </div>

                  <div class="projectDesc">
                        <article>
                            ${project.description}
                        </article>
                     </div>

                     <div class="projectTeckstack">
                        ${techSpans}
                    </div>
                 </div>            
        </div>`;
}

projectData.forEach(project =>{
    projectCons.innerHTML += createProjectCard(project);
})

techStacklanguage.forEach(techslang =>{
    techlanguageContainer.innerHTML +=createTechStacks(techslang);
})
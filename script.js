function makeList() {
    const coachesList = [
        {
            name: "Duke Pancake",
            title: "Lead Coach"
        },
        {
            name: "Amy Schifsky",
            title: "Business Coach"
        },
        {
            name: "Zachery Peterson",
            title: "Coding Coach"
        },
        {
            name: "Elizabeth Denzine",
            title: "Mentor"
        },
        {
            name: "Kelly Stone",
            title: "Transportation, Mentor"
        },
        {
            name: "Chris Stassen",
            title: "Mentoring FRC Veteran, 22-24 Member / Captain"
        }
    ];
    const membersList = [
        {
            name: "Olof Bakke",
            title: "Fabrication/ Team captain 24&25"
        },
        {
            name: "Annabell Fanfulik",
            title: "Coding"
        },
        {
            name: "Brayden Packer",
            title: "Fabrication"
        },
        {
            name: "Brittainica Hansen",
            title: "Apprenctice"
        },
        {
            name: "Clara Hagen",
            title: "Apprentice"
        },
        {
            name: "Debra Ritter",
            title: "Marketing"
        },
        {
            name: "Jaxon Norton",
            title: "Apprentice"
        },

        {
            name: "McKenzie Rodenberg",
            title: "Marketing?"
        },
        {
            name: "Michael Pettengill",
            title: "Apprentice"
        },
        {
            name: "Mike Anderson",
            title: "Coding"
        },
        {
            name: "Royal Johnson",
            title: "Quartermaster/Build team"
        },
        {
            name: "Sami Syverson",
            title: "Coding"
        },
        {
            name: "Sydney Reed",
            title: "Marketing"
        },
        {
            name: "Teah Van Hale",
            title: "Coding"
        },
        {
            name: "Timothy Ryan",
            title: "Sales"
        },
        {
            name: "Titus Hamilton",
            title: "Strategist"
        },
        {
            name: "Weston Skow",
            title: "Apprentice"
        }
    ];

    const members = document.getElementById("members");
    const coaches = document.getElementById("coaches");

    for (let i = 0; i < membersList.length; i++) {
        const memberSection = document.createElement("div");
        memberSection.classList.add("member");
        
        const memberName = document.createElement("h2");
        memberName.classList.add("name");
        memberName.innerHTML += membersList[i].name;
        
        const memberTitle = document.createElement("div");
        memberTitle.classList.add("title");
        memberTitle.innerHTML += membersList[i].title;
        
        memberSection.appendChild(memberName);
        memberSection.appendChild(memberTitle);
        members.appendChild(memberSection);
    }
    
    for (let i = 0; i < coachesList.length; i++) {
        const memberSection = document.createElement("div");
        memberSection.classList.add("member");
        
        const memberName = document.createElement("h2");
        memberName.classList.add("name");
        memberName.innerHTML += coachesList[i].name;
        
        const memberTitle = document.createElement("div");
        memberTitle.classList.add("title");
        memberTitle.innerHTML += coachesList[i].title;
        
        memberSection.appendChild(memberName);
        memberSection.appendChild(memberTitle);
        coaches.appendChild(memberSection);
    }
    
}

makeList();
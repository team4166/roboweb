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
            title: "Mentor, Past Captain"
        }
    ];
    const membersList = [
        {
            name: "Royal Johnson",
            title: "Building Team"
        },
        {
            name: "Sami Syverson",
            title: "Robotics"
        },
        {
            name: "Sydney Reed",
            title: "Robotics"
        },
        {
            name: "Titus Hamilton",
            title: "Robotics"
        },
        {
            name: "Annabell Fanfulik",
            title: "Robotics"
        },
        {
            name: "Brittainica Hansen",
            title: "Robotics"
        },
        {
            name: "Debra Ritter",
            title: "Robotics"
        },
        {
            name: "Mike Anderson",
            title: "Robotics"
        },
        {
            name: "McKenzie Rodenberg",
            title: "Robotics"
        },
        {
            name: "Teah Van Hale",
            title: "Robotics"
        },
        {
            name: "Brayden Packer",
            title: "Robotics"
        },
        {
            name: "Timothy Ryan",
            title: "Robotics"
        },
        {
            name: "Weston Skow",
            title: "Robotics"
        },
        {
            name: "Leo Holifield",
            title: "Robotics"
        },
        {
            name: "Clara Hagen",
            title: "Robotics"
        },
        {
            name: "Micheal Pettengill",
            title: "Robotics"
        },
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

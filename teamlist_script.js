function createMemberElement(person) {
    const memberSection = document.createElement("div");
    memberSection.classList.add("member");
    // Add captain class if title includes "captain" (case insensitive)
    if (person.title.toLowerCase().includes("captain")) {
        memberSection.classList.add("captain");
    }
    
    const memberName = document.createElement("h2");
    memberName.classList.add("name");
    memberName.textContent = person.name;
    
    const memberTitle = document.createElement("div");
    memberTitle.classList.add("title");
    memberTitle.textContent = person.title;
    
    memberSection.appendChild(memberName);
    memberSection.appendChild(memberTitle);
    
    return memberSection;
}

function makeList() {
    const coachesList = [
        { name: "Duke Pancake", title: "Lead Coach" },
        { name: "Amy Schifsky", title: "Business Coach" },
        { name: "Zachery Peterson", title: "Coding Coach" },
        { name: "Elizabeth Denzine", title: "Mentor" },
        { name: "Kelly Stone", title: "Transportation, Mentor" },
        { name: "Chris Stassen", title: "Alumni Captain Mentor" }
    ];
    
    const allMembers = [
        { name: "Olof Bakke", title: "Fabrication/ Team captain 24&25" },
        { name: "Royal Johnson", title: "Quartermaster/Build team" },
        { name: "Sami Syverson", title: "Coding" },
        { name: "Sydney Reed", title: "Marketing" },
        { name: "Titus Hamilton", title: "Strategist" },
        { name: "Annabell Fanfulik", title: "Website team" },
        { name: "Brittainica Hansen", title: "Deutschland Dory" },
        { name: "Debra Ritter", title: "Marketing" },
        { name: "Mike Anderson", title: "Web team/Coding" },
        { name: "McKenzie Rodenberg", title: "Robotics?" },
        { name: "Teah Van Hale", title: "Solderist Supreme" },
        { name: "Brayden Packer", title: "Fabrication" },
        { name: "Timothy Ryan", title: "Coupon King" },
        { name: "Weston Skow", title: "Apprentice" },
        { name: "Leo Holifield", title: "...Mia?..." },
        { name: "Clara Hagen", title: "Apprentice" },
        { name: "Micheal Pettengill", title: "Apprentice" },
        { name: "Jaxon Norton", title: "Apprentice" }
    ];

    // Separate captains and regular members
    const captains = allMembers.filter(member => 
        member.title.toLowerCase().includes("captain")
    ).sort((a, b) => a.name.localeCompare(b.name));

    const regularMembers = allMembers.filter(member => 
        !member.title.toLowerCase().includes("captain")
    ).sort((a, b) => a.name.localeCompare(b.name));

    // Combine sorted captains and regular members
    const sortedMembers = [...captains, ...regularMembers];

    const membersContainer = document.getElementById("members");
    const coachesContainer = document.getElementById("coaches");

    // Error handling for missing containers
    if (!membersContainer || !coachesContainer) {
        console.error("Required containers not found!");
        return;
    }

    // Render coaches
    coachesList.forEach(coach => {
        coachesContainer.appendChild(createMemberElement(coach));
    });
    
    // Render all members (captains first, then regular members)
    sortedMembers.forEach(member => {
        membersContainer.appendChild(createMemberElement(member));
    });
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', makeList);
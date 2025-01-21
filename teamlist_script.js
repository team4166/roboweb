function createMemberElement(person) {
    const memberSection = document.createElement("div");
    memberSection.classList.add("member");
    
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
    
    // First, separate the captain from other members
    const captain = { name: "Olof Bakke", title: "Fabrication/ Team captain 24&25" };
    
    const otherMembers = [
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

    // Sort other members alphabetically by name
    const sortedMembers = otherMembers.sort((a, b) => a.name.localeCompare(b.name));
    
    // Combine captain with sorted members
    const membersList = [captain, ...sortedMembers];

    const membersContainer = document.getElementById("members");
    const coachesContainer = document.getElementById("coaches");

    // Error handling for missing containers
    if (!membersContainer || !coachesContainer) {
        console.error("Required containers not found!");
        return;
    }

    // Render coaches (unchanged)
    coachesList.forEach(coach => {
        coachesContainer.appendChild(createMemberElement(coach));
    });
    
    // Render sorted members with captain first
    membersList.forEach(member => {
        membersContainer.appendChild(createMemberElement(member));
    });
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', makeList);
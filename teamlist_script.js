function createMemberElement(person) {
    const memberSection = document.createElement("div");
    memberSection.classList.add("member");
    
    // Add class based on tier
    switch (person.tier) {
        case 'coach':
            memberSection.classList.add("coach");
            break;
        case 'captain':
            memberSection.classList.add("captain");
            break;
        case 'member':
            memberSection.classList.add("regular-member");
            break;
        // apprentice tier gets no additional class - keeps default styling
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
    const allTeamMembers = [
        // Coaches
        { name: "Duke Pancake", title: "Lead Coach", tier: "coach" },
        { name: "Amy Schifsky", title: "Business Coach", tier: "coach" },
        { name: "Bill Kluge", title: "Lead Coach 2", tier: "coach" },
        { name: "Elizabeth Denzine", title: "Mentor", tier: "coach" },
        { name: "Kelly Stone", title: "Transportation, Mentor", tier: "coach" },
        { name: "Chris Stassen", title: "Alumni Captain '22-24' Mentor", tier: "coach" },
        
        // Captain
        { name: "Olof Bakke", title: "Fabrication/Team Captain '24-'25", tier: "captain" },
        
        // Regular Members
        { name: "Royal Johnson", title: "Quartermaster/Build team", tier: "member" },
        { name: "Sami Syverson", title: "Coding", tier: "member" },
        { name: "Sydney Reed", title: "Marketing", tier: "member" },
        { name: "Titus Hamilton", title: "Strategist", tier: "member" },
        { name: "Annabell Fanfulik", title: "Coding", tier: "member" },
        { name: "Debra Ritter", title: "Marketing/Safety", tier: "member" },
        { name: "Mike Anderson", title: "Coding", tier: "member" },
        { name: "Teah Van Hale", title: "Coding", tier: "member" },
        { name: "Liam Connolly", title: "Fabrication", tier: "member" },
        { name: "Weston Skow", title: "Building Apprentice", tier: "member" },
        { name: "Brayden Packer", title: "Fabrication", tier: "member" },
         
        // Apprentices
        
        { name: "Brittainica Hansen", title: "Safety", tier: "member" },
        { name: "Clara Hagen", title: "Marketing Apprentice", tier: "apprentice" },
        { name: "Haillie Saxon", title: "Marketing Contributor", tier: "apprentice" },
        { name: "Michael Pettengill", title: "Coding Apprentice", tier: "apprentice" }
        ];

    // Separate and sort members by tier
    const coaches = allTeamMembers.filter(member => 
        member.tier === 'coach'
    ).sort((a, b) => a.name.localeCompare(b.name));

    const captains = allTeamMembers.filter(member => 
        member.tier === 'captain'
    ).sort((a, b) => a.name.localeCompare(b.name));

    const regularMembers = allTeamMembers.filter(member => 
        member.tier === 'member'
    ).sort((a, b) => a.name.localeCompare(b.name));

    const apprentices = allTeamMembers.filter(member => 
        member.tier === 'apprentice'
    ).sort((a, b) => a.name.localeCompare(b.name));

    const coachesContainer = document.getElementById("coaches");
    const membersContainer = document.getElementById("members");

    // Error handling for missing containers
    if (!membersContainer || !coachesContainer) {
        console.error("Required containers not found!");
        return;
    }

    // Render coaches
    coaches.forEach(coach => {
        coachesContainer.appendChild(createMemberElement(coach));
    });
    
    // Render all other members in tier order
    const sortedMembers = [...captains, ...regularMembers, ...apprentices];
    sortedMembers.forEach(member => {
        membersContainer.appendChild(createMemberElement(member));
    });
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', makeList);

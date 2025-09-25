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
        { name: "Joe Hoe " , title: " Building Coach" , tier: " coach" },
        
        // Captain
        //we might have more people
      
        
        // Regular Members
          
        { name: "Bee Ritter", title: "Marketing/Fabrication", tier: "member" },
        { name: "Haillie Saxon", title: "Marketing/Fabrication", tier: "member" },
        { name: "Mike Anderson", title: "Coding", tier: "member" },
        { name: "Teah Van Hale", title: "Coding", tier: "member" },
        { name: "Brayden Packer", title: "Fabrication", tier: "member" },
         
        // Apprentices
        //make sure that if they are aprenticecs in 8th grade that in 9th grade they will be a member
        
        { name: "Weston Skow", title: "Fabrication", tier: "apprentice" },
        { name: "Annabell Fanfulik", title: "Coding", tier: "apprentice" },
        { name: "Timmy Ryan", title: "Fabrication", tier: "apprentice" },
        { name: "Brittainica Hansen", title: "Safety", tier: "apprentice" },
        { name: "Clara Hagen", title: "Marketing Apprentice", tier: "apprentice" },
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

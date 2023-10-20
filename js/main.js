import users from "./users.js";

// Завдання 1

function calculateTotalBalance(users) {
    return users.reduce((acc, user) => {
        return acc += user["balance"]
    }, 0)
};

console.log("Total balance :>>>", calculateTotalBalance(users)); 

// Завдання 2

function getUsersWithFriend(users, friendName) {
    return users.filter(user => user["friends"].some(name => name === friendName))
}

console.log("Users with friend :>>>", getUsersWithFriend(users, "Sharron Pace"));

// Завдання 3

function getNamesSortedByFriendsCount(users) {
    return [...users].sort((userA, userB) => {
        return userB.friends.length - userA.friends.length;
    });
}

console.log("Users sorted by friends count :>>>", getNamesSortedByFriendsCount(users));

// Завдання 4

function getSortedUniqueSkills(users) {
    const sortedSkills = [];
    
    users.map((user) => {
        user["skills"].filter((skill) => {
            if (sortedSkills.every(sortedSkill => sortedSkill !== skill)) {
                sortedSkills.push(skill)
            }
        })
    })
    sortedSkills.sort()
    
    return sortedSkills
};

console.log(getSortedUniqueSkills(users));
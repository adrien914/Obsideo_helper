interactions = [
    {id: 1, name: "Flick light switches"},
    {id: 2, name: "Turn On/Off Radios"},
    {id: 3, name: "Turn On/Off Alarms"},
    {id: 4, name: "Turn On/Off Breaker"},
    {id: 5, name: "Turn On/Off TV"},
    {id: 6, name: "Turn On/Off Kettle"},
    {id: 7, name: "Stab Walls"},
    {id: 8, name: "Open/Close Doors"},
    {id: 9, name: "Rock Rocking Chair"},
    {id: 10, name: "Blow out candles"},
    {id: 11, name: "Knock Books Off Bookshelves"},
    {id: 12, name: "Knock Paintings Off Walls"},
    {id: 13, name: "String Ukulele"},
    {id: 14, name: "Ring Mobile Phones"},
    {id: 15, name: "Throw Bloody Knives"},
    {id: 16, name: "Smash Bottles"},
    {id: 17, name: "Roll Kids ball"},
    {id: 18, name: "Throw Kids Toy"},
    {id: 19, name: "Throw/Smash Plates"},
    {id: 20, name: "Crucifixes on walls"},
    {id: 21, name: "Dig Graves"},
    {id: 22, name: "Change Players Flashlight"},
    {id: 23, name: "Kill Houseplants"},
    {id: 24, name: "Lock Doors"},
    {id: 25, name: "Float paintings down Hallway"},
    {id: 26, name: "Pin chair to Ceiling"},
    {id: 27, name: "Steal Household Ornaments/Items"},
    {id: 28, name: "Hissing"},
    {id: 29, name: "Crucifixes out front"},
    {id: 30, name: "Place Pentagrams"},
    {id: 31, name: "Scribble On Paintings"},
    {id: 32, name: "Open Drawers"},
    {id: 33, name: "Move kids toys"},
    {id: 34, name: "Blood Writing"},
    {id: 35, name: "Rain Blood"},
    {id: 36, name: "Bruise Players"},
    {id: 37, name: "Write on Paintings"},
    {id: 38, name: "Fill a room with Moths"},
    {id: 39, name: "Smash Walls"},
    {id: 40, name: "Fill bath with blood"},
    {id: 41, name: "Flip paintings Upside Down"},
    {id: 42, name: "throw Footballs"},
    {id: 43, name: "Fill a Room with Cockroaches"},
    {id: 44, name: "Hang Voodoo Dolls From Ceiling"},
    {id: 45, name: "Lift all Objtects"},
    {id: 46, name: "Write on mirrors"},
    {id: 47, name: "Disembodied Breathing"},
    {id: 48, name: "Turn On/Off Oven"},
    {id: 49, name: "Steal All Paintings"},
    {id: 50, name: "Steal All Rugs"},
    {id: 51, name: "Push Over Fridge"},
    {id: 52, name: "Blood Pools"},
    {id: 53, name: "Fill Kitchen Sink With Blood"},
    {id: 54, name: "Bloody Handprints"},
    {id: 55, name: "Throw Dino Toy"},
    {id: 56, name: "Fill a Room with Flies"},
    {id: 57, name: "Disembodied crying ( not baby )"},
    {id: 58, name: "Smash Windows ( audio only )"},
    {id: 59, name: "Fake a Hunt"},
    {id: 60, name: "Disable player Flashlight"},
    {id: 61, name: "Duplicate household Objects"},
    {id: 62, name: "Spike Player Heartrate"},
]

ghosts = [
    {id: 1, name: "Effigy", interactions: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]},
    {id: 2, name: "Rusalka", interactions: [2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,22,24,25,26,27,45,46,47,48]},
    {id: 3, name: "Demon", interactions: [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,48]},
    {id: 4, name: "Shade", interactions: [9,18,14,1,2,3,46,47,11,32,5,6,48,25,13,8,10]},
    {id: 5, name: "Oni", interactions: [25,13,19,27,15,18,9,5,6,48,12,17,26,33,14,23,24,1,2,3,8,,34,11,10,35,29,31,4,7,16,36]},
    {id: 6, name: "Yurei", interactions: [15,19,55,14,3,6,25,10,47,21,11,9,46,42,29,56,1,45,34,53,57,32,39,51]},
    {id: 7, name: "Mare", interactions: [37,11,16,9,13,14,3,38,19,39,22,40,41,6,42,5,43,44,49,50,51,52,12,20,53,54,23,10]},
    {id: 8, name: "Chimera", interactions: [5,6,9,48,34,55,1,53,3,14,4,7,43,54,16,19,51,38,58,30,8,56,59,60,61,62]}
]

interactions.forEach(interaction => {
    document.getElementById("interactions").innerHTML += `
    <input type="checkbox" id="${interaction.id}">
    <label class="interaction" for="${interaction.id}">${interaction.name}</label>
    `
})

ghosts.forEach(ghost => {
    document.getElementById("ghost_types").innerHTML += `<div class="ghost" id="${ghost.name}">${ghost.name}</div>`
})
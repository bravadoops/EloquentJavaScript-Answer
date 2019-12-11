// 1 Measure a Robot
function compareRobots(robot1, memory1, robot2, memory2) {
    // Your code here
    let round1 = 0;
    let round2 = 0;
    for (let i = 0; i < 100; i++) {
        let state1 = VillageState.random();
        let state2 = state1;
        for (let turn = 0;; turn++) {
            if (state1.parcels.length == 0) {
              round1 += turn;
              break;
            }
            let action = robot1(state1, memory1);
            state1 = state1.move(action.direction);
            memory1 = action.memory;
        }
        for (let turn = 0;; turn++) {
            if (state2.parcels.length == 0) {
              round2 += turn;
              break;
            }
            let action = robot2(state2, memory2);
            state2 = state2.move(action.direction);
            memory2 = action.memory;
        }
    }
    // can only be used for 100 times compare
    console.log(round1 / 100);
    console.log(round2 / 100);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
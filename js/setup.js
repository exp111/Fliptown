const map = document.getElementById("map");

function checkbox(section, type, id, x, y, threeState = false) {
    let check = document.createElement("input");
    check.id = `${section}-${type}-${id}`;
    check.type = "checkbox";
    check.onclick = (e) => {
        if (threeState) {
            if (check.readOnly) check.checked = check.readOnly = false;
            else if (!check.checked) check.readOnly = check.indeterminate = true;
        }
    }
    check.classList.add("check");
    check.classList.add(section);
    if (type.length > 0)
        check.classList.add(type);
    check.style.left = `${x / 4803 * 100}%`;
    check.style.top = `${y / 2402 * 100}%`;
    check.checked = false;
    map.appendChild(check);
    let label = document.createElement("label");
    label.htmlFor = check.id;
    map.appendChild(label);
    return check;
}

function numbox(section, type, id, x, y, min = null, max = null) {
    let num = document.createElement("input");
    num.id = `${section}-${type}-${id}`;
    num.type = "number";
    num.classList.add("numbox");
    num.classList.add(section);
    num.classList.add(type);
    num.style.left = `${x / 4803 * 100}%`;
    num.style.top = `${y / 2402 * 100}%`;
    if (min != null)
        num.min = min;
    if (max != null)
        num.max = max;
    map.appendChild(num);
    return num;
}

function textbox(section, type, id, x, y, length = null) {
    let text = document.createElement("input");
    text.id = `${section}-${type}-${id}`;
    text.type = "text";
    text.classList.add("textbox");
    text.classList.add(section);
    text.classList.add(type);
    text.style.left = `${x / 4803 * 100}%`;
    text.style.top = `${y / 2402 * 100}%`;
    if (length != null)
        text.maxLength = length;
    map.appendChild(text);
    return text;
}

function radio(section, type, name, id, x, y) {
    let radio = document.createElement("input");
    radio.id = `${section}-${type}-${id}`;
    radio.type = "radio";
    radio.name = name;
    radio.classList.add("radio");
    radio.classList.add(section);
    radio.classList.add(type);
    radio.style.left = `${x / 4803 * 100}%`;
    radio.style.top = `${y / 2402 * 100}%`;
    map.appendChild(radio);
    return radio;
}

function trail() {
    // bonus
    checkbox("trail", "bonus", "", 311, 570, false);
    // trail entries
    let offsets = [[440, 475], [580, 470], [720, 490], [855, 460], [990, 440], [1092, 401],
        [1325, 415], [1465, 412], [1595, 395], [1737, 440], [1875, 490], [2018, 477], [2163, 450]
    ];
    for (let i in offsets) {
        let offset = offsets[i];
        checkbox("trail", "entry", `${i}`, offset[0], offset[1], true);
    }
}

function badlands() {
    // bonus
    {
        let xOffsets = [103, 223, 335];
        for (let x in xOffsets) {
            checkbox("badlands", "bonus", `${x}`, xOffsets[x], 796, false);
        }
    }
    // robberies
    let xOffsets = [[330, 590, 850], [220, 590, 920], [280, 580, 890], [320, 610, 900]];
    let yOffsets = [955, 1140, 1320, 1500];
    let type = ["chicken", "cow", "carriage", "train"];
    for (let y in yOffsets) {
        for (let x in xOffsets[y]) {
            let c = checkbox("badlands", "robbery", `${x}${y}`, xOffsets[y][x], yOffsets[y], false);
            c.classList.add(type[y]);
        }
    }
    // bonus actions
    for (let y = 0; y < 4; y++) {
        checkbox("badlands", "reward", `${y}`, 1065, 990 + (y * 175), false);
    }
}

function mine() {
    // bonus
    checkbox("mine", "bonus", "", 1510, 850);
    // mine
    let xOffsets = [[1674, 1920], [1537, 1795, 2048], [1428, 1670, 1920, 2160], [1340, 1550, 1800, 2050, 2263]];
    let yOffsets = [982, 1158, 1348, 1558];
    for (let y in yOffsets) {
        for (let x in xOffsets[y]) {
            checkbox("mine", `mine${y}`, `${x}${y}`, xOffsets[y][x], yOffsets[y], false);
        }
    }
}

function town() {
    // TODO: bank on red/black
    checkbox("town", "bonus", "red", 2904, 108, false);
    checkbox("town", "bonus", "red", 3087, 108, false);
    // bonus actions
    let offsets = [
        [2629, 258], [3018, 256], [3402, 350],
        [2625, 588], [3010, 532], [3405, 581],
        [2627, 930], [3020, 933], [3419, 893],
        [2623, 1303], [2943, 1330], [3196, 1328], [3451, 1325]
    ];
    for (let i in offsets) {
        let offset = offsets[i];
        checkbox("town", "action", `${i}`, offset[0], offset[1], false);
    }
    // undertaker
    checkbox("town", "undertaker", "0", 2631, 318, false);
    checkbox("town", "undertaker", "1", 2631, 415, false);
    // bank
    checkbox("town", "bank", "red", 2940, 318, false);
    checkbox("town", "bank", "black", 3102, 318, false);
    // stable
    checkbox("town", "stable", "0", 2631, 675, false);
    checkbox("town", "stable", "1", 2631, 760, false);
    // general store
    checkbox("town", "general", "0", 3020, 605, false);
    checkbox("town", "general", "1", 3020, 685, false);
    checkbox("town", "general", "2", 3020, 758, false);
    // hotel
    checkbox("town", "hotel", "0", 2538, 1040, false);
    checkbox("town", "hotel", "1", 2602, 1040, false);
    checkbox("town", "hotel", "2", 2665, 1040, false);
    checkbox("town", "hotel", "3", 2729, 1040, false);
    // land office
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            checkbox("town", "land", `${x}${y}`, 3015 + (x * 70), 1006 + (y * 72), false);
        }
    }
    // gunsmith
    checkbox("town", "gunsmith", "0", 3414, 989, false);
    checkbox("town", "gunsmith", "0", 3414, 1099, false);
    // bail bonds
    checkbox("town", "bond", "0", 2557, 1423, false);
    checkbox("town", "bond", "0", 2626, 1423, false);
    checkbox("town", "bond", "0", 2696, 1423, false);
}

function poker() {
    // bonus
    for (let x = 0; x < 3; x++) {
        checkbox("poker", "bonus", `${x}`, 4030 + (x * 148), 98, false);
    }
    // value textboxes //TODO: instead dropdown?
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 5; y++) {
            textbox("poker", "box", `${x}${y}`, 3693 + (x * 386), 241 + (y * 81), 1);
        }
    }
    // suit radios
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 5; y++) {
            for (let g = 0; g < 4; g++) {
                radio("poker", "suit", `poker${x}${y}`, `${x}${y}${g}`, 3766 + (x * 386) + (g * 62.5), 241 + (y * 81), 1);
            }
        }
    }
}

function cemetery() {
    // bonus
    checkbox("cemetery", "bonus", "0", 3699, 949, false);
    checkbox("cemetery", "bonus", "1", 4142, 952, false);

    // graves
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (x == 1 && y == 1) // center one is always unlocked
                continue;
            //TODO: manually adjust x for each column

            checkbox("cemetery", "grave", `${x}${y}`, 3731 + (x * 215), 1074 + (y * 230), false);
        }
    }
}

function cash() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 7; y++) {
            checkbox("cash", "", `${x}${y}`, 187 + (x * 94), 1800 + (y * 73.5), true);
        }
    }
}

function gold() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 5; y++) {
            checkbox("gold", "", `${x}${y}`, 1366 + (x * 98), 1798 + (y * 76), true);
        }
    }
}

function stars() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 7; y++) {
            checkbox("star", "", `${x}${y}`, 2600 + (x * 91.5), 1798 + (y * 73.5), true);
        }
    }
}

function wanted() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 3; y++) {
            checkbox("wanted", "", `${x}${y}`, 3761 + (x * 100), 1805 + (y * 95), true);
        }
    }
}

function scoring() {
    for (let x = 0; x < 4; x++) {
        checkbox("score", "goldpan", `${x}`, 3841 + (x * 80), 2198, false);
    }
    for (let x = 0; x < 4; x++) {
        checkbox("score", "hammer", `${x}`, 4338 + (x * 72), 2196, false);
    }

    // individual scores
    numbox("score", "box", "0", 3830, 2305, "0");
    numbox("score", "box", "1", 4038, 2305, "0");
    numbox("score", "box", "2", 4214, 2305, "0");
    numbox("score", "box", "3", 4389, 2305, "0");
    numbox("score", "final-score", "", 4600, 2305, "0");
}

function setup() {
    trail();
    badlands();
    mine();
    town();
    poker();
    cemetery();
    cash();
    gold();
    stars();
    wanted();
    scoring();
}

setup();
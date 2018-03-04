export function stateToStyle(state) {
    switch(state){
        case "done":
            return "success";
        case "todo":
            return "warning";
        case "remove":
            return "danger";
        default: 
            return "info";
    }
}

export function stateToIcon(state) {
    switch(state){
        case "done":
            return "👌🏻";
        case "todo":
            return "✍🏻";
        case "remove":
            return "👎🏻";
        default: 
            return "❔";
    }
}

export function availableOptions(state) {
    switch(state){
        case "done":
            return ["remove"];
        case "todo":
            return ["done", "remove"];
        case "remove":
            return ["todo"];
        default: 
            return [];
    }
}
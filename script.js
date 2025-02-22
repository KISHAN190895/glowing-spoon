function showDetails(strategy) {
    let info = "";
    
    if (strategy === "bull-call") {
        info = "Bull Call Spread: Buy 1 ATM Call & Sell 1 OTM Call.";
    } else if (strategy === "bear-put") {
        info = "Bear Put Spread: Buy 1 ATM Put & Sell 1 OTM Put.";
    } else if (strategy === "iron-butterfly") {
        info = "Iron Butterfly: Sell ATM Call & Put, Buy OTM Call & Put.";
    }
    
    document.getElementById("strategy-info").innerText = info;
    document.getElementById("details").classList.remove("hidden");
}

function closeDetails() {
    document.getElementById("details").classList.add("hidden");
}
const searchData = [
    {
        title: "Bedwars Beginner Guide",
        category: "Bedwars",
        description:
            "Learn the basic rules, resource management, bed defense, bridging, and team strategies for ArchMC Bedwars.",
        keywords: [
            "bedwars",
            "bed wars",
            "beginner",
            "guide",
            "bed",
            "defense",
            "bridge"
        ]
    },
    {
        title: "Bedwars Tips",
        category: "Tips",
        description:
            "Improve your Bedwars gameplay with better movement, resource management, PvP timing, and map awareness.",
        keywords: [
            "bedwars",
            "tips",
            "pvp",
            "winning",
            "improve",
            "strategy",
            "skills"
        ]
    },
    {
        title: "Bedwars Leveling Guide",
        category: "Bedwars",
        description:
            "Find useful strategies for earning experience and increasing your Bedwars level efficiently.",
        keywords: [
            "bedwars",
            "level",
            "levels",
            "leveling",
            "experience",
            "xp"
        ]
    },
    {
        title: "Lifesteal Guide",
        category: "Lifesteal",
        description:
            "Learn how the Lifesteal game mode works, how to protect your hearts, and how to survive against other players.",
        keywords: [
            "lifesteal",
            "life steal",
            "hearts",
            "survival",
            "pvp",
            "guide"
        ]
    },
    {
        title: "PvP Improvement Tips",
        category: "Tips",
        description:
            "Practice aim, movement, spacing, sprint resetting, and decision-making to improve your Minecraft PvP skills.",
        keywords: [
            "pvp",
            "tips",
            "aim",
            "movement",
            "spacing",
            "sprint",
            "combat",
            "improve"
        ]
    },
    {
        title: "Useful ArchMC Commands",
        category: "Commands",
        description:
            "A collection of useful commands for navigating ArchMC and using common server features.",
        keywords: [
            "commands",
            "command",
            "help",
            "server",
            "archmc"
        ]
    },
    {
        title: "New Player Guide",
        category: "Guide",
        description:
            "A starting guide for new ArchMC players, including game modes, basic navigation, and useful first steps.",
        keywords: [
            "new",
            "player",
            "beginner",
            "start",
            "starting",
            "guide",
            "archmc"
        ]
    },
    {
        title: "Housing Guide",
        category: "Housing",
        description:
            "Learn the basics of creating, managing, and sharing a housing plot on ArchMC.",
        keywords: [
            "housing",
            "house",
            "plot",
            "building",
            "build",
            "guide"
        ]
    },
    {
        title: "Duels Guide",
        category: "Duels",
        description:
            "Learn the basics of ArchMC Duels, including kits, movement, spacing, and match strategy.",
        keywords: [
            "duels",
            "duel",
            "pvp",
            "kits",
            "match",
            "strategy"
        ]
    }
];

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsSection = document.getElementById("resultsSection");
const resultsTitle = document.getElementById("resultsTitle");
const searchResults = document.getElementById("searchResults");
const quickSearchButtons = document.querySelectorAll(
    ".quick-search-button"
);

function normalizeText(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function calculateResultScore(item, queryWords) {
    const title = normalizeText(item.title);
    const category = normalizeText(item.category);
    const description = normalizeText(item.description);
    const keywords = item.keywords.map(normalizeText);

    let score = 0;

    queryWords.forEach(function (word) {
        if (title.includes(word)) {
            score += 5;
        }

        if (category.includes(word)) {
            score += 4;
        }

        if (keywords.some(function (keyword) {
            return keyword.includes(word);
        })) {
            score += 3;
        }

        if (description.includes(word)) {
            score += 1;
        }
    });

    return score;
}

function searchArchMC(query) {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
        return [];
    }

    const queryWords = normalizedQuery.split(" ");

    return searchData
        .map(function (item) {
            return {
                item: item,
                score: calculateResultScore(item, queryWords)
            };
        })
        .filter(function (result) {
            return result.score > 0;
        })
        .sort(function (firstResult, secondResult) {
            return secondResult.score - firstResult.score;
        })
        .map(function (result) {
            return result.item;
        });
}

function createResultCard(item) {
    const card = document.createElement("article");
    card.className = "result-card";

    const category = document.createElement("span");
    category.className = "result-category";
    category.textContent = item.category;

    const title = document.createElement("h3");
    title.className = "result-title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "result-description";
    description.textContent = item.description;

    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}

function showResults(query) {
    const results = searchArchMC(query);

    searchResults.replaceChildren();
    resultsSection.classList.add("visible");

    if (results.length === 0) {
        resultsTitle.textContent = "No results found";

        const noResults = document.createElement("div");
        noResults.className = "no-results";

        const message = document.createElement("p");
        message.append("No results were found for ");

        const queryText = document.createElement("strong");
        queryText.textContent = `"${query}"`;

        message.appendChild(queryText);
        message.append(". Try searching for Bedwars, Lifesteal, PvP, or commands.");

        noResults.appendChild(message);
        searchResults.appendChild(noResults);
    } else {
        resultsTitle.textContent =
            `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`;

        results.forEach(function (item) {
            searchResults.appendChild(createResultCard(item));
        });
    }

    resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
        searchInput.focus();
        return;
    }

    showResults(query);
});

quickSearchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const query = button.dataset.query;

        searchInput.value = query;
        showResults(query);
    });
});

searchInput.focus();

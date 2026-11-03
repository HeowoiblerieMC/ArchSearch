"use strict";

// ============================================================
// Search information
// ============================================================

const searchData = [
    {
        id: "bedwars-beginner-guide",
        title: "Bedwars Beginner Guide",
        category: "Guide",
        description:
            "Learn resources, bed defense, bridging, and basic team strategy.",
        keywords: [
            "bedwars",
            "bed wars",
            "beginner",
            "guide",
            "defense",
            "bridging",
            "resources"
        ],
        trending: true,
        recommended: true,
        content: `
            <p>
                Bedwars is a team game where players protect their own bed
                while attempting to destroy enemy beds.
            </p>

            <h3>Getting Started</h3>

            <ol>
                <li>Collect iron and gold from the generator.</li>
                <li>Buy blocks before leaving the base.</li>
                <li>Build a simple bed defense.</li>
                <li>Check nearby teams before attacking.</li>
            </ol>

            <h3>Common Mistakes</h3>

            <ul>
                <li>Leaving the bed completely unprotected.</li>
                <li>Carrying too many resources into a fight.</li>
                <li>Standing too close to the edge.</li>
                <li>Attacking without checking nearby teams.</li>
            </ul>
        `
    },
    {
        id: "bedwars-leveling-guide",
        title: "Bedwars Leveling Guide",
        category: "Guide",
        description:
            "Learn how to gain experience and improve your level consistently.",
        keywords: [
            "bedwars",
            "level",
            "leveling",
            "xp",
            "experience",
            "grind"
        ],
        trending: true,
        recommended: true,
        content: `
            <p>
                Consistent gameplay is more useful than playing many matches
                without a clear goal.
            </p>

            <h3>Leveling Tips</h3>

            <ul>
                <li>Complete matches instead of leaving early.</li>
                <li>Focus on team objectives.</li>
                <li>Practice one skill at a time.</li>
                <li>Review unsuccessful matches.</li>
            </ul>
        `
    },
    {
        id: "bedwars-strategy",
        title: "Bedwars Strategy Tips",
        category: "Tips",
        description:
            "Improve attack timing, defense, awareness, and resource management.",
        keywords: [
            "bedwars",
            "strategy",
            "tips",
            "win",
            "attack",
            "defense",
            "resources"
        ],
        trending: true,
        recommended: true,
        content: `
            <h3>Resource Management</h3>

            <p>
                Decide what the team needs before spending resources.
                Blocks, tools, weapons, and defense materials have different uses.
            </p>

            <h3>Map Awareness</h3>

            <ul>
                <li>Check bridges connected to the base.</li>
                <li>Watch which teams have lost their beds.</li>
                <li>Remember where enemy players were last seen.</li>
            </ul>
        `
    },
    {
        id: "pvp-improvement",
        title: "PvP Improvement Tips",
        category: "Tips",
        description:
            "Improve aim, movement, spacing, and combat decision-making.",
        keywords: [
            "pvp",
            "aim",
            "movement",
            "spacing",
            "combat",
            "practice",
            "clicking"
        ],
        trending: true,
        recommended: true,
        content: `
            <h3>Movement</h3>

            <p>
                Avoid moving in a completely predictable direction.
                Practice controlled strafing while maintaining aim.
            </p>

            <h3>Aim</h3>

            <ul>
                <li>Keep the crosshair near the opponent.</li>
                <li>Use a sensitivity that is easy to control.</li>
                <li>Do not sacrifice accuracy only to click faster.</li>
            </ul>
        `
    },
    {
        id: "lifesteal-guide",
        title: "Lifesteal Guide",
        category: "Guide",
        description:
            "Learn survival priorities, combat risks, and heart progression.",
        keywords: [
            "lifesteal",
            "life steal",
            "hearts",
            "survival",
            "pvp",
            "guide"
        ],
        trending: true,
        recommended: false,
        content: `
            <p>
                Lifesteal combines survival gameplay with player combat
                and heart-related progression.
            </p>

            <h3>Early Priorities</h3>

            <ul>
                <li>Gather resources before searching for fights.</li>
                <li>Store important items safely.</li>
                <li>Avoid risking valuable equipment without a plan.</li>
            </ul>
        `
    },
    {
        id: "duels-guide",
        title: "Duels Guide",
        category: "Guide",
        description:
            "Learn kits, movement, spacing, and match strategy.",
        keywords: [
            "duels",
            "duel",
            "kit",
            "pvp",
            "match",
            "strategy"
        ],
        trending: false,
        recommended: true,
        content: `
            <h3>Learn the Kit</h3>

            <p>
                Learn the available items and how each item affects the match.
            </p>

            <h3>Review Matches</h3>

            <p>
                Identify whether a loss was caused by aim, movement,
                positioning, item usage, or decision-making.
            </p>
        `
    },
    {
        id: "useful-commands",
        title: "Useful ArchMC Commands",
        category: "Commands",
        description:
            "Find useful server commands and explanations.",
        keywords: [
            "commands",
            "command",
            "help",
            "party",
            "friends",
            "server"
        ],
        trending: false,
        recommended: true,
        content: `
            <p>
                Commands may change after server updates.
                Verify each command in-game before publishing it.
            </p>

            <h3>General Commands</h3>

            <ul>
                <li>Add verified help commands here.</li>
                <li>Add verified party commands here.</li>
                <li>Add verified friend commands here.</li>
            </ul>
        `
    },
    {
        id: "archmc-ranks",
        title: "ArchMC Ranks",
        category: "Ranks",
        description:
            "Explore ranks, benefits, and official ArchMC services.",
        keywords: [
            "rank",
            "ranks",
            "store",
            "benefits",
            "purchase",
            "buy"
        ],
        trending: true,
        recommended: true,
        content: `
            <p>
                Rank prices, availability, and benefits may change.
                Check the official ArchMC website before purchasing.
            </p>

            <p>
                <a
                    href="https://arch.mc/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit the official ArchMC website
                </a>
            </p>
        `
    }
];

// ============================================================
// Settings and state
// ============================================================

const HISTORY_KEY = "archsearch-history";
const MAX_HISTORY = 8;

let currentResults = [];
let currentCategory = "All";
let currentQuery = "";

// ============================================================
// Elements
// ============================================================

const homeSection = document.getElementById("homeSection");
const searchWrapper = document.getElementById("searchWrapper");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");

const liveSuggestionsSection = document.getElementById(
    "liveSuggestionsSection"
);

const liveSuggestions = document.getElementById("liveSuggestions");
const historySection = document.getElementById("historySection");
const historyList = document.getElementById("historyList");
const clearHistoryButton = document.getElementById(
    "clearHistoryButton"
);

const trendingSection = document.getElementById("trendingSection");
const trendingList = document.getElementById("trendingList");

const recommendedSection = document.getElementById(
    "recommendedSection"
);

const recommendedList = document.getElementById("recommendedList");

const resultsSection = document.getElementById("resultsSection");
const resultsTitle = document.getElementById("resultsTitle");
const categoryFilters = document.getElementById("categoryFilters");
const searchResults = document.getElementById("searchResults");
const newSearchButton = document.getElementById("newSearchButton");

const articleSection = document.getElementById("articleSection");
const articleContent = document.getElementById("articleContent");
const backButton = document.getElementById("backButton");

// ============================================================
// Utilities
// ============================================================

function normalizeText(text) {
    return String(text)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function searchableText(item) {
    return normalizeText(
        [
            item.title,
            item.category,
            item.description,
            ...item.keywords
        ].join(" ")
    );
}

function getHistory() {
    try {
        const history = JSON.parse(
            localStorage.getItem(HISTORY_KEY) || "[]"
        );

        return Array.isArray(history) ? history : [];
    } catch {
        return [];
    }
}

function saveHistory(history) {
    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history.slice(0, MAX_HISTORY))
    );
}

function addHistory(query) {
    const updatedHistory = getHistory().filter(function (item) {
        return normalizeText(item) !== normalizeText(query);
    });

    updatedHistory.unshift(query);
    saveHistory(updatedHistory);
    renderHistory();
}

function removeHistory(query) {
    const updatedHistory = getHistory().filter(function (item) {
        return normalizeText(item) !== normalizeText(query);
    });

    saveHistory(updatedHistory);
    renderHistory();
}

// ============================================================
// Suggestion rows
// ============================================================

function createSuggestionRow(options) {
    const button = document.createElement("button");

    button.className = "suggestion-row";
    button.type = "button";

    const symbol = document.createElement("span");

    symbol.className = "suggestion-symbol";
    symbol.textContent = options.symbol;

    const copy = document.createElement("span");

    copy.className = "suggestion-copy";

    const title = document.createElement("span");

    title.className = "suggestion-title";
    title.textContent = options.title;

    copy.appendChild(title);

    if (options.description) {
        const description = document.createElement("span");

        description.className = "suggestion-description";
        description.textContent = options.description;

        copy.appendChild(description);
    }

    const arrow = document.createElement("span");

    arrow.className = "suggestion-arrow";
    arrow.textContent = "↗";

    button.appendChild(symbol);
    button.appendChild(copy);
    button.appendChild(arrow);

    button.addEventListener("click", options.action);

    return button;
}

function openSuggestions() {
    searchWrapper.classList.add("open");
    renderSuggestions(searchInput.value);
}

function closeSuggestions() {
    searchWrapper.classList.remove("open");
}

function renderSuggestions(query) {
    const normalizedQuery = normalizeText(query);

    if (normalizedQuery) {
        liveSuggestionsSection.hidden = false;
        historySection.hidden = true;
        trendingSection.hidden = true;
        recommendedSection.hidden = true;

        liveSuggestions.replaceChildren();

        const matches = searchData
            .filter(function (item) {
                return searchableText(item).includes(normalizedQuery);
            })
            .slice(0, 8);

        matches.forEach(function (item) {
            liveSuggestions.appendChild(
                createSuggestionRow({
                    symbol: "⌕",
                    title: item.title,
                    description:
                        `${item.category} · ${item.description}`,
                    action: function () {
                        performSearch(item.title);
                    }
                })
            );
        });

        if (matches.length === 0) {
            const emptyMessage = document.createElement("p");

            emptyMessage.className = "empty-message";
            emptyMessage.textContent = "No matching suggestions.";

            liveSuggestions.appendChild(emptyMessage);
        }

        return;
    }

    liveSuggestionsSection.hidden = true;
    historySection.hidden = false;
    trendingSection.hidden = false;
    recommendedSection.hidden = false;

    renderHistory();
    renderTrending();
    renderRecommended();
}

function renderHistory() {
    const history = getHistory();

    historyList.replaceChildren();
    clearHistoryButton.hidden = history.length === 0;

    if (history.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No recent searches yet.";

        historyList.appendChild(emptyMessage);
        return;
    }

    history.forEach(function (query) {
        const entry = document.createElement("div");

        entry.className = "history-entry";

        entry.appendChild(
            createSuggestionRow({
                symbol: "↶",
                title: query,
                action: function () {
                    performSearch(query);
                }
            })
        );

        const removeButton = document.createElement("button");

        removeButton.className = "remove-history-button";
        removeButton.type = "button";
        removeButton.textContent = "×";
        removeButton.setAttribute(
            "aria-label",
            `Remove ${query}`
        );

        removeButton.addEventListener("click", function () {
            removeHistory(query);
        });

        entry.appendChild(removeButton);
        historyList.appendChild(entry);
    });
}

function renderTrending() {
    trendingList.replaceChildren();

    searchData
        .filter(function (item) {
            return item.trending;
        })
        .slice(0, 6)
        .forEach(function (item) {
            trendingList.appendChild(
                createSuggestionRow({
                    symbol: "↗",
                    title: item.title,
                    description: item.category,
                    action: function () {
                        performSearch(item.title);
                    }
                })
            );
        });
}

function renderRecommended() {
    recommendedList.replaceChildren();

    searchData
        .filter(function (item) {
            return item.recommended;
        })
        .slice(0, 6)
        .forEach(function (item) {
            recommendedList.appendChild(
                createSuggestionRow({
                    symbol: "★",
                    title: item.title,
                    description: item.description,
                    action: function () {
                        performSearch(item.title);
                    }
                })
            );
        });
}

// ============================================================
// Search
// ============================================================

function calculateScore(item, words) {
    const title = normalizeText(item.title);
    const category = normalizeText(item.category);
    const description = normalizeText(item.description);
    const keywords = item.keywords.map(normalizeText);

    let score = 0;

    words.forEach(function (word) {
        if (title.includes(word)) {
            score += 7;
        }

        if (category.includes(word)) {
            score += 4;
        }

        if (
            keywords.some(function (keyword) {
                return keyword.includes(word);
            })
        ) {
            score += 3;
        }

        if (description.includes(word)) {
            score += 1;
        }
    });

    return score;
}

function searchItems(query) {
    const words = normalizeText(query)
        .split(" ")
        .filter(Boolean);

    return searchData
        .map(function (item) {
            return {
                item: item,
                score: calculateScore(item, words)
            };
        })
        .filter(function (result) {
            return result.score > 0;
        })
        .sort(function (first, second) {
            return second.score - first.score;
        })
        .map(function (result) {
            return result.item;
        });
}

function performSearch(query) {
    const cleanedQuery = query.trim();

    if (!cleanedQuery) {
        searchInput.focus();
        openSuggestions();
        return;
    }

    currentQuery = cleanedQuery;
    currentResults = searchItems(cleanedQuery);
    currentCategory = "All";

    searchInput.value = cleanedQuery;

    addHistory(cleanedQuery);
    closeSuggestions();
    updateClearButton();

    homeSection.style.display = "none";
    articleSection.classList.remove("visible");
    resultsSection.classList.add("visible");

    resultsTitle.textContent =
        `${currentResults.length} result` +
        `${currentResults.length === 1 ? "" : "s"}` +
        ` for "${cleanedQuery}"`;

    renderCategories();
    renderResults();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ============================================================
// Results
// ============================================================

function renderCategories() {
    categoryFilters.replaceChildren();

    const categories = [
        "All",
        ...new Set(
            currentResults.map(function (item) {
                return item.category;
            })
        )
    ];

    categories.forEach(function (category) {
        const button = document.createElement("button");

        button.className = "category-button";
        button.type = "button";
        button.textContent = category;

        if (category === currentCategory) {
            button.classList.add("active");
        }

        button.addEventListener("click", function () {
            currentCategory = category;
            renderCategories();
            renderResults();
        });

        categoryFilters.appendChild(button);
    });
}

function createResultCard(item) {
    const card = document.createElement("button");

    card.className = "result-card";
    card.type = "button";

    const category = document.createElement("span");

    category.className = "result-category";
    category.textContent = item.category;

    const title = document.createElement("h3");

    title.className = "result-title";
    title.textContent = item.title;

    const description = document.createElement("p");

    description.className = "result-description";
    description.textContent = item.description;

    const open = document.createElement("span");

    open.className = "result-open";
    open.textContent = "Open →";

    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(open);

    card.addEventListener("click", function () {
        openArticle(item);
    });

    return card;
}

function renderResults() {
    searchResults.replaceChildren();

    const visibleResults =
        currentCategory === "All"
            ? currentResults
            : currentResults.filter(function (item) {
                return item.category === currentCategory;
            });

    if (visibleResults.length === 0) {
        const message = document.createElement("div");

        message.className = "no-results";
        message.textContent =
            `No ArchSearch information was found for "${currentQuery}".`;

        searchResults.appendChild(message);
        return;
    }

    visibleResults.forEach(function (item) {
        searchResults.appendChild(createResultCard(item));
    });
}

// ============================================================
// Article viewer
// ============================================================

function openArticle(item) {
    articleContent.innerHTML = `
        <span class="article-category">
            ${item.category}
        </span>

        <h2>
            ${item.title}
        </h2>

        ${item.content}
    `;

    resultsSection.classList.remove("visible");
    articleSection.classList.add("visible");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showResults() {
    articleSection.classList.remove("visible");
    resultsSection.classList.add("visible");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showHome() {
    resultsSection.classList.remove("visible");
    articleSection.classList.remove("visible");

    homeSection.style.display = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(function () {
        searchInput.focus();
        openSuggestions();
    }, 200);
}

// ============================================================
// Input controls
// ============================================================

function updateClearButton() {
    clearButton.classList.toggle(
        "visible",
        searchInput.value.trim().length > 0
    );
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    performSearch(searchInput.value);
});

searchInput.addEventListener("focus", function () {
    openSuggestions();
});

searchInput.addEventListener("click", function () {
    openSuggestions();
});

searchInput.addEventListener("input", function () {
    updateClearButton();
    renderSuggestions(searchInput.value);
});

clearButton.addEventListener("click", function () {
    searchInput.value = "";
    updateClearButton();
    renderSuggestions("");
    searchInput.focus();
});

clearHistoryButton.addEventListener("click", function () {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
});

newSearchButton.addEventListener("click", showHome);
backButton.addEventListener("click", showResults);

document.addEventListener("click", function (event) {
    if (!searchWrapper.contains(event.target)) {
        closeSuggestions();
    }
});

// ============================================================
// Initial setup
// ============================================================

renderHistory();
renderTrending();
renderRecommended();
updateClearButton();

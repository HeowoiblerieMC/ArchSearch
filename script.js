"use strict";

// ============================================================
// 1. Search content data
// ============================================================

const searchData = [
    {
        id: "bedwars-beginner-guide",
        title: "Bedwars Beginner Guide",
        category: "Guide",
        description:
            "Learn resources, bed defense, bridging, team strategy, and the basic flow of an ArchMC Bedwars match.",
        content: `
            <p>
                Bedwars is a team-based game mode where players protect their
                own bed while trying to destroy enemy beds.
            </p>

            <div class="article-note">
                <p>
                    Game mechanics may change after ArchMC updates.
                    Verify important information in-game or through official
                    ArchMC resources.
                </p>
            </div>

            <h3>Getting Started</h3>

            <ol>
                <li>Collect iron and gold from the generator.</li>
                <li>Buy blocks before leaving your base.</li>
                <li>Build a simple defense around your bed.</li>
                <li>Check nearby teams before starting a bridge.</li>
                <li>Keep valuable resources in a safe location when possible.</li>
            </ol>

            <h3>Basic Bed Defense</h3>

            <p>
                A basic defense should be quick to build and should give your
                team enough time to react to an attack. Avoid spending all of
                your early resources on a large defense.
            </p>

            <h3>Common Beginner Mistakes</h3>

            <ul>
                <li>Leaving the bed completely unprotected.</li>
                <li>Carrying too many resources into a dangerous fight.</li>
                <li>Standing close to the edge during combat.</li>
                <li>Attacking without checking nearby teams.</li>
                <li>Ignoring teammates who are defending the base.</li>
            </ul>
        `,
        keywords: [
            "bedwars",
            "bed wars",
            "beginner",
            "guide",
            "bed",
            "defense",
            "resources",
            "bridging",
            "bridge",
            "team"
        ],
        trending: true,
        recommended: true
    },
    {
        id: "bedwars-leveling-guide",
        title: "Bedwars Leveling Guide",
        category: "Guide",
        description:
            "Learn practical ways to earn experience and improve your Bedwars level consistently.",
        content: `
            <p>
                Consistent gameplay is more useful than playing a large number
                of matches without a clear goal.
            </p>

            <h3>Leveling Principles</h3>

            <ul>
                <li>Complete matches instead of leaving early.</li>
                <li>Focus on useful team objectives.</li>
                <li>Choose a mode where you can contribute consistently.</li>
                <li>Review unsuccessful matches and identify one mistake.</li>
                <li>Practice one skill at a time.</li>
            </ul>

            <h3>Simple Practice Routine</h3>

            <ol>
                <li>Practice bridging for five minutes.</li>
                <li>Play several matches while focusing on awareness.</li>
                <li>Practice PvP without carrying valuable resources.</li>
                <li>Review one match and write down one improvement.</li>
            </ol>

            <div class="article-note">
                <p>
                    Experience rewards and leveling systems may change.
                    ArchSearch does not guarantee a specific amount of
                    experience per match.
                </p>
            </div>
        `,
        keywords: [
            "bedwars",
            "level",
            "levels",
            "leveling",
            "xp",
            "experience",
            "grind",
            "fast",
            "progress"
        ],
        trending: true,
        recommended: true
    },
    {
        id: "bedwars-strategy-tips",
        title: "Bedwars Strategy Tips",
        category: "Tips",
        description:
            "Improve resource management, attack timing, defense, and decision-making.",
        content: `
            <h3>Resource Management</h3>

            <p>
                Decide what your team needs before spending resources.
                Blocks, tools, weapons, and defense materials serve different
                purposes during each stage of a match.
            </p>

            <h3>Attack Timing</h3>

            <p>
                An attack is more effective when the target team is distracted,
                separated, or missing important resources.
            </p>

            <h3>Map Awareness</h3>

            <ul>
                <li>Check bridges connected to your base.</li>
                <li>Watch which teams have lost their beds.</li>
                <li>Remember where enemy players were last seen.</li>
                <li>Avoid entering a fight when another team can attack your bed.</li>
            </ul>

            <h3>Team Communication</h3>

            <p>
                Short and clear information is usually more useful than long
                messages. Report incoming players, exposed beds, and important
                resource locations.
            </p>
        `,
        keywords: [
            "bedwars",
            "strategy",
            "tips",
            "win",
            "winning",
            "resource",
            "attack",
            "defense",
            "teamwork",
            "awareness"
        ],
        trending: true,
        recommended: true
    },
    {
        id: "pvp-improvement-tips",
        title: "PvP Improvement Tips",
        category: "Tips",
        description:
            "Improve movement, spacing, aim, sprint resetting, and combat decisions.",
        content: `
            <h3>Movement</h3>

            <p>
                Avoid moving in a completely predictable direction.
                Controlled strafing can make it harder for an opponent to
                maintain accurate aim.
            </p>

            <h3>Spacing</h3>

            <p>
                Pay attention to the distance between both players.
                Walking directly into every attack can make a fight much
                harder to control.
            </p>

            <h3>Aim</h3>

            <ul>
                <li>Keep the crosshair near the opponent before clicking.</li>
                <li>Avoid using sensitivity that is difficult to control.</li>
                <li>Practice tracking moving targets.</li>
                <li>Do not sacrifice accuracy only to click faster.</li>
            </ul>

            <h3>Practice Routine</h3>

            <ol>
                <li>Practice aim for five minutes.</li>
                <li>Practice movement for five minutes.</li>
                <li>Play matches with one specific goal.</li>
                <li>Review which situations caused each loss.</li>
            </ol>
        `,
        keywords: [
            "pvp",
            "aim",
            "movement",
            "spacing",
            "combat",
            "practice",
            "improve",
            "sprint reset",
            "w tap",
            "clicking"
        ],
        trending: true,
        recommended: true
    },
    {
        id: "lifesteal-guide",
        title: "Lifesteal Guide",
        category: "Guide",
        description:
            "Understand survival priorities, hearts, combat risks, and progression in Lifesteal.",
        content: `
            <p>
                Lifesteal combines survival gameplay with player-versus-player
                combat and heart-related progression.
            </p>

            <h3>Early Priorities</h3>

            <ul>
                <li>Gather basic resources before searching for fights.</li>
                <li>Build a safe location for important items.</li>
                <li>Avoid risking valuable equipment without a plan.</li>
                <li>Learn the current server rules before trading or fighting.</li>
            </ul>

            <h3>Combat Decisions</h3>

            <p>
                Not every fight is worth taking. Consider equipment,
                location, escape routes, nearby players, and the value of
                items in your inventory.
            </p>

            <div class="article-note">
                <p>
                    Lifesteal rules and heart mechanics may change between
                    seasons. Check ArchMC announcements for current details.
                </p>
            </div>
        `,
        keywords: [
            "lifesteal",
            "life steal",
            "hearts",
            "survival",
            "pvp",
            "guide",
            "season",
            "combat",
            "progression"
        ],
        trending: true,
        recommended: false
    },
    {
        id: "duels-guide",
        title: "Duels Guide",
        category: "Guide",
        description:
            "Learn the basics of kits, movement, spacing, and match strategy in Duels.",
        content: `
            <h3>Learn the Kit</h3>

            <p>
                Each kit can require a different strategy. Learn the available
                items before focusing only on mechanical speed.
            </p>

            <h3>Control the Fight</h3>

            <ul>
                <li>Avoid standing near dangerous edges.</li>
                <li>Track the opponent's healing and utility items.</li>
                <li>Use movement to create better attack angles.</li>
                <li>Do not repeat the same approach after every loss.</li>
            </ul>

            <h3>Review Matches</h3>

            <p>
                After a loss, identify whether the main problem was aim,
                movement, item usage, positioning, or decision-making.
            </p>
        `,
        keywords: [
            "duels",
            "duel",
            "kit",
            "kits",
            "pvp",
            "match",
            "strategy",
            "fight",
            "practice"
        ],
        trending: false,
        recommended: true
    },
    {
        id: "housing-guide",
        title: "Housing Guide",
        category: "Guide",
        description:
            "Learn the basics of creating, managing, and sharing an ArchMC Housing plot.",
        content: `
            <p>
                Housing allows players to create and manage a personal area
                that other players may be able to visit.
            </p>

            <h3>Planning a Housing Project</h3>

            <ul>
                <li>Decide the purpose of the plot before building.</li>
                <li>Create a clear entrance for visitors.</li>
                <li>Use signs or instructions when interaction is required.</li>
                <li>Test the plot from a visitor's perspective.</li>
            </ul>

            <h3>Visitor Experience</h3>

            <p>
                Keep important areas easy to find. Avoid excessive decorations
                that make navigation difficult or reduce device performance.
            </p>
        `,
        keywords: [
            "housing",
            "house",
            "plot",
            "build",
            "building",
            "visitor",
            "guide",
            "create"
        ],
        trending: false,
        recommended: true
    },
    {
        id: "useful-commands",
        title: "Useful ArchMC Commands",
        category: "Commands",
        description:
            "Find useful server commands and explanations in one place.",
        content: `
            <p>
                Commands can differ between game modes and may change during
                server updates.
            </p>

            <div class="article-note">
                <p>
                    Only verified commands should be added to this page.
                    Test every command in-game before publishing it.
                </p>
            </div>

            <h3>General Help</h3>

            <ul>
                <li>
                    <code>/help</code>
                    may display available help information.
                </li>
                <li>
                    Add verified party commands here.
                </li>
                <li>
                    Add verified friend commands here.
                </li>
                <li>
                    Add verified game mode commands here.
                </li>
            </ul>
        `,
        keywords: [
            "command",
            "commands",
            "help",
            "party",
            "friends",
            "server",
            "navigation",
            "archmc"
        ],
        trending: false,
        recommended: true
    },
    {
        id: "new-player-guide",
        title: "New Player Guide",
        category: "Guide",
        description:
            "A simple starting guide for players joining ArchMC for the first time.",
        content: `
            <h3>Before Playing</h3>

            <ul>
                <li>Read the current server rules.</li>
                <li>Check the available game modes.</li>
                <li>Learn the basic lobby navigation.</li>
                <li>Avoid sharing personal account information.</li>
            </ul>

            <h3>First Matches</h3>

            <p>
                Use early matches to learn maps, items, and objectives.
                Winning immediately is less important than understanding
                how each game mode works.
            </p>

            <h3>Getting Help</h3>

            <p>
                Use official ArchMC resources for account issues, purchases,
                punishments, and server-specific support.
            </p>

            <a
                class="article-official-link"
                href="https://arch.mc/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit ArchMC
                <span aria-hidden="true">→</span>
            </a>
        `,
        keywords: [
            "new",
            "player",
            "beginner",
            "start",
            "starting",
            "join",
            "guide",
            "archmc",
            "help"
        ],
        trending: false,
        recommended: true
    },
    {
        id: "archmc-ranks",
        title: "ArchMC Ranks",
        category: "Ranks",
        description:
            "Explore ArchMC ranks, possible benefits, and official server services.",
        content: `
            <p>
                Rank availability, prices, benefits, and purchase conditions
                can change over time.
            </p>

            <div class="article-note">
                <p>
                    Always use the official ArchMC website for current prices,
                    rank details, purchase terms, and support.
                </p>
            </div>

            <h3>Before Purchasing</h3>

            <ul>
                <li>Check which game modes support the rank.</li>
                <li>Read the current list of rank benefits.</li>
                <li>Check whether the purchase is permanent or temporary.</li>
                <li>Read the refund and payment terms.</li>
                <li>Confirm that the Minecraft username is entered correctly.</li>
            </ul>

            <a
                class="article-official-link"
                href="https://arch.mc/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open the Official ArchMC Website
                <span aria-hidden="true">→</span>
            </a>
        `,
        keywords: [
            "rank",
            "ranks",
            "store",
            "benefits",
            "purchase",
            "buy",
            "archmc",
            "official"
        ],
        trending: true,
        recommended: true
    },
    {
        id: "archmc-official-links",
        title: "Official ArchMC Resources",
        category: "Official",
        description:
            "Quick access to official ArchMC information and services.",
        content: `
            <p>
                Use official resources when checking announcements, purchases,
                rules, support information, and server updates.
            </p>

            <a
                class="article-official-link"
                href="https://arch.mc/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit ArchMC
                <span aria-hidden="true">→</span>
            </a>
        `,
        keywords: [
            "official",
            "website",
            "archmc",
            "links",
            "support",
            "updates",
            "news"
        ],
        trending: false,
        recommended: true
    }
];

// ============================================================
// 2. Application settings
// ============================================================

const SEARCH_HISTORY_KEY = "archSearchHistory";
const MAX_HISTORY_ITEMS = 8;
const MAX_MATCHING_SUGGESTIONS = 6;

let currentQuery = "";
let currentResults = [];
let currentCategory = "All";

// ============================================================
// 3. DOM elements
// ============================================================

const heroSection = document.getElementById("heroSection");
const searchArea = document.getElementById("searchArea");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const clearInputButton = document.getElementById("clearInputButton");
const suggestionPanel = document.getElementById("suggestionPanel");

const matchingSuggestionsSection = document.getElementById(
    "matchingSuggestionsSection"
);

const matchingSuggestions = document.getElementById(
    "matchingSuggestions"
);

const trendingSection = document.getElementById("trendingSection");
const trendingList = document.getElementById("trendingList");

const recommendedSection = document.getElementById(
    "recommendedSection"
);

const recommendedList = document.getElementById("recommendedList");

const historySection = document.getElementById("historySection");
const historyList = document.getElementById("historyList");
const clearHistoryButton = document.getElementById(
    "clearHistoryButton"
);

const resultsSection = document.getElementById("resultsSection");
const resultsTitle = document.getElementById("resultsTitle");
const categoryFilters = document.getElementById("categoryFilters");
const searchResults = document.getElementById("searchResults");
const returnHomeButton = document.getElementById("returnHomeButton");

const articleViewer = document.getElementById("articleViewer");
const articleBackButton = document.getElementById("articleBackButton");
const articleContent = document.getElementById("articleContent");

// ============================================================
// 4. Text and search utilities
// ============================================================

function normalizeText(text) {
    return String(text)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}

function escapeHtml(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getCategoryIcon(category) {
    const categoryIcons = {
        Guide: "📘",
        Tips: "💡",
        Commands: "⌨️",
        Ranks: "⭐",
        Official: "🔗"
    };

    return categoryIcons[category] || "🔍";
}

function getSearchableText(item) {
    return normalizeText(
        [
            item.title,
            item.category,
            item.description,
            ...item.keywords
        ].join(" ")
    );
}

// ============================================================
// 5. Search history
// ============================================================

function getSearchHistory() {
    try {
        const savedHistory = localStorage.getItem(
            SEARCH_HISTORY_KEY
        );

        if (!savedHistory) {
            return [];
        }

        const parsedHistory = JSON.parse(savedHistory);

        if (!Array.isArray(parsedHistory)) {
            return [];
        }

        return parsedHistory
            .filter(function (item) {
                return typeof item === "string";
            })
            .slice(0, MAX_HISTORY_ITEMS);
    } catch (error) {
        return [];
    }
}

function saveSearchHistory(history) {
    try {
        localStorage.setItem(
            SEARCH_HISTORY_KEY,
            JSON.stringify(history)
        );
    } catch (error) {
        console.warn("Search history could not be saved.");
    }
}

function addSearchHistory(query) {
    const cleanQuery = query.trim();

    if (!cleanQuery) {
        return;
    }

    const history = getSearchHistory().filter(function (item) {
        return normalizeText(item) !== normalizeText(cleanQuery);
    });

    history.unshift(cleanQuery);

    saveSearchHistory(
        history.slice(0, MAX_HISTORY_ITEMS)
    );

    renderSearchHistory();
}

function removeSearchHistory(query) {
    const updatedHistory = getSearchHistory().filter(function (item) {
        return normalizeText(item) !== normalizeText(query);
    });

    saveSearchHistory(updatedHistory);
    renderSearchHistory();
}

function clearSearchHistory() {
    try {
        localStorage.removeItem(SEARCH_HISTORY_KEY);
    } catch (error) {
        console.warn("Search history could not be cleared.");
    }

    renderSearchHistory();
}

// ============================================================
// 6. Search scoring
// ============================================================

function calculateResultScore(item, queryWords) {
    const title = normalizeText(item.title);
    const category = normalizeText(item.category);
    const description = normalizeText(item.description);

    const keywords = item.keywords.map(function (keyword) {
        return normalizeText(keyword);
    });

    let score = 0;

    queryWords.forEach(function (word) {
        if (title === word) {
            score += 15;
        } else if (title.includes(word)) {
            score += 7;
        }

        if (category === word) {
            score += 6;
        } else if (category.includes(word)) {
            score += 4;
        }

        keywords.forEach(function (keyword) {
            if (keyword === word) {
                score += 6;
            } else if (keyword.includes(word)) {
                score += 3;
            }
        });

        if (description.includes(word)) {
            score += 2;
        }
    });

    const normalizedQuery = queryWords.join(" ");

    if (title.includes(normalizedQuery)) {
        score += 10;
    }

    return score;
}

function searchArchMC(query) {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
        return [];
    }

    const queryWords = normalizedQuery
        .split(" ")
        .filter(Boolean);

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
            if (secondResult.score !== firstResult.score) {
                return secondResult.score - firstResult.score;
            }

            return firstResult.item.title.localeCompare(
                secondResult.item.title
            );
        })
        .map(function (result) {
            return result.item;
        });
}

// ============================================================
// 7. Suggestion panel
// ============================================================

function openSuggestionPanel() {
    searchArea.classList.add("open");
    searchInput.setAttribute("aria-expanded", "true");

    renderMatchingSuggestions(searchInput.value);
    renderTrendingItems();
    renderRecommendedItems();
    renderSearchHistory();
}

function closeSuggestionPanel() {
    searchArea.classList.remove("open");
    searchInput.setAttribute("aria-expanded", "false");
}

function createSuggestionButton(item, icon) {
    const button = document.createElement("button");

    button.className = "suggestion-item";
    button.type = "button";

    const iconElement = document.createElement("span");
    iconElement.className = "suggestion-item-icon";
    iconElement.textContent = icon;

    const content = document.createElement("span");
    content.className = "suggestion-item-content";

    const title = document.createElement("span");
    title.className = "suggestion-item-title";
    title.textContent = item.title;

    const description = document.createElement("span");
    description.className = "suggestion-item-description";
    description.textContent =
        `${item.category} · ${item.description}`;

    const arrow = document.createElement("span");
    arrow.className = "suggestion-arrow";
    arrow.textContent = "↗";

    content.appendChild(title);
    content.appendChild(description);

    button.appendChild(iconElement);
    button.appendChild(content);
    button.appendChild(arrow);

    button.addEventListener("click", function () {
        searchInput.value = item.title;
        updateClearInputButton();

        performSearch(item.title);
    });

    return button;
}

function renderMatchingSuggestions(query) {
    const normalizedQuery = normalizeText(query);

    matchingSuggestions.replaceChildren();

    if (!normalizedQuery) {
        matchingSuggestionsSection.hidden = true;
        trendingSection.hidden = false;
        recommendedSection.hidden = false;
        historySection.hidden = false;

        return;
    }

    const matches = searchData
        .filter(function (item) {
            return getSearchableText(item).includes(normalizedQuery);
        })
        .slice(0, MAX_MATCHING_SUGGESTIONS);

    matchingSuggestionsSection.hidden = matches.length === 0;
    trendingSection.hidden = true;
    recommendedSection.hidden = true;
    historySection.hidden = true;

    matches.forEach(function (item) {
        matchingSuggestions.appendChild(
            createSuggestionButton(
                item,
                getCategoryIcon(item.category)
            )
        );
    });
}

function renderTrendingItems() {
    trendingList.replaceChildren();

    const trendingItems = searchData
        .filter(function (item) {
            return item.trending;
        })
        .slice(0, 5);

    trendingItems.forEach(function (item) {
        trendingList.appendChild(
            createSuggestionButton(item, "🔥")
        );
    });
}

function renderRecommendedItems() {
    recommendedList.replaceChildren();

    const recommendedItems = searchData
        .filter(function (item) {
            return item.recommended;
        })
        .slice(0, 5);

    recommendedItems.forEach(function (item) {
        recommendedList.appendChild(
            createSuggestionButton(item, "✨")
        );
    });
}

function createHistoryRow(query) {
    const row = document.createElement("div");
    row.className = "history-row";

    const button = document.createElement("button");
    button.className = "suggestion-item";
    button.type = "button";

    const icon = document.createElement("span");
    icon.className = "suggestion-item-icon";
    icon.textContent = "🕘";

    const content = document.createElement("span");
    content.className = "suggestion-item-content";

    const title = document.createElement("span");
    title.className = "suggestion-item-title";
    title.textContent = query;

    content.appendChild(title);

    const arrow = document.createElement("span");
    arrow.className = "suggestion-arrow";
    arrow.textContent = "↗";

    button.appendChild(icon);
    button.appendChild(content);
    button.appendChild(arrow);

    button.addEventListener("click", function () {
        searchInput.value = query;
        updateClearInputButton();

        performSearch(query);
    });

    const removeButton = document.createElement("button");
    removeButton.className = "remove-history-button";
    removeButton.type = "button";
    removeButton.setAttribute(
        "aria-label",
        `Remove ${query} from search history`
    );
    removeButton.textContent = "×";

    removeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        removeSearchHistory(query);
    });

    row.appendChild(button);
    row.appendChild(removeButton);

    return row;
}

function renderSearchHistory() {
    const history = getSearchHistory();

    historyList.replaceChildren();

    clearHistoryButton.hidden = history.length === 0;

    if (history.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-history";
        emptyMessage.textContent = "No recent searches yet.";

        historyList.appendChild(emptyMessage);
        return;
    }

    history.forEach(function (query) {
        historyList.appendChild(
            createHistoryRow(query)
        );
    });
}

// ============================================================
// 8. Category filters
// ============================================================

function getResultCategories(results) {
    const categories = results.map(function (item) {
        return item.category;
    });

    return [
        "All",
        ...new Set(categories)
    ];
}

function renderCategoryFilters() {
    categoryFilters.replaceChildren();

    const categories = getResultCategories(currentResults);

    categories.forEach(function (category) {
        const button = document.createElement("button");

        button.className = "category-filter";
        button.type = "button";
        button.textContent = category;

        if (category === currentCategory) {
            button.classList.add("active");
        }

        button.addEventListener("click", function () {
            currentCategory = category;

            renderCategoryFilters();
            renderResults();
        });

        categoryFilters.appendChild(button);
    });
}

// ============================================================
// 9. Search results
// ============================================================

function createResultCard(item) {
    const card = document.createElement("button");

    card.className = "result-card";
    card.type = "button";
    card.dataset.articleId = item.id;

    const category = document.createElement("span");
    category.className = "result-category";
    category.textContent = item.category;

    const title = document.createElement("h3");
    title.className = "result-title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "result-description";
    description.textContent = item.description;

    const openText = document.createElement("span");
    openText.className = "result-open";
    openText.textContent = "Open →";

    card.appendChild(category);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(openText);

    card.addEventListener("click", function () {
        openArticle(item.id);
    });

    return card;
}

function renderNoResults() {
    const noResults = document.createElement("div");
    noResults.className = "no-results";

    const title = document.createElement("h3");
    title.textContent = "No results found";

    const message = document.createElement("p");
    message.textContent =
        `No ArchSearch information was found for "${currentQuery}". ` +
        "Try Bedwars, Lifesteal, PvP, ranks, commands, or beginner guide.";

    noResults.appendChild(title);
    noResults.appendChild(message);

    searchResults.appendChild(noResults);
}

function renderResults() {
    searchResults.replaceChildren();

    const filteredResults =
        currentCategory === "All"
            ? currentResults
            : currentResults.filter(function (item) {
                return item.category === currentCategory;
            });

    if (filteredResults.length === 0) {
        renderNoResults();
        return;
    }

    filteredResults.forEach(function (item) {
        searchResults.appendChild(
            createResultCard(item)
        );
    });
}

function performSearch(query) {
    const cleanQuery = query.trim();

    if (!cleanQuery) {
        searchInput.focus();
        openSuggestionPanel();
        return;
    }

    currentQuery = cleanQuery;
    currentResults = searchArchMC(cleanQuery);
    currentCategory = "All";

    searchInput.value = cleanQuery;

    addSearchHistory(cleanQuery);
    updateClearInputButton();
    closeSuggestionPanel();

    heroSection.style.display = "none";
    articleViewer.classList.remove("visible");
    resultsSection.classList.add("visible");

    resultsTitle.textContent =
        currentResults.length === 1
            ? `1 result for "${cleanQuery}"`
            : `${currentResults.length} results for "${cleanQuery}"`;

    renderCategoryFilters();
    renderResults();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ============================================================
// 10. Article viewer
// ============================================================

function openArticle(articleId) {
    const article = searchData.find(function (item) {
        return item.id === articleId;
    });

    if (!article) {
        return;
    }

    const safeTitle = escapeHtml(article.title);
    const safeCategory = escapeHtml(article.category);

    articleContent.innerHTML = `
        <span class="article-category">
            ${safeCategory}
        </span>

        <h2>
            ${safeTitle}
        </h2>

        ${article.content}
    `;

    resultsSection.classList.remove("visible");
    articleViewer.classList.add("visible");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function closeArticle() {
    articleViewer.classList.remove("visible");
    resultsSection.classList.add("visible");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ============================================================
// 11. Home and input controls
// ============================================================

function showHome() {
    resultsSection.classList.remove("visible");
    articleViewer.classList.remove("visible");

    heroSection.style.display = "";
    currentQuery = "";
    currentResults = [];
    currentCategory = "All";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    window.setTimeout(function () {
        searchInput.focus();
        openSuggestionPanel();
    }, 250);
}

function updateClearInputButton() {
    const hasValue = searchInput.value.trim().length > 0;

    clearInputButton.classList.toggle(
        "visible",
        hasValue
    );
}

function clearSearchInput() {
    searchInput.value = "";
    updateClearInputButton();
    renderMatchingSuggestions("");

    searchInput.focus();
}

// ============================================================
// 12. Event listeners
// ============================================================

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    performSearch(searchInput.value);
});

searchInput.addEventListener("focus", function () {
    openSuggestionPanel();
});

searchInput.addEventListener("click", function () {
    openSuggestionPanel();
});

searchInput.addEventListener("input", function () {
    updateClearInputButton();
    renderMatchingSuggestions(searchInput.value);
});

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSuggestionPanel();
        searchInput.blur();
    }
});

clearInputButton.addEventListener("click", function () {
    clearSearchInput();
});

clearHistoryButton.addEventListener("click", function () {
    clearSearchHistory();
});

returnHomeButton.addEventListener("click", function () {
    showHome();
});

articleBackButton.addEventListener("click", function () {
    closeArticle();
});

document.addEventListener("click", function (event) {
    if (!searchArea.contains(event.target)) {
        closeSuggestionPanel();
    }
});

// ============================================================
// 13. Initial rendering
// ============================================================

function initializeArchSearch() {
    renderTrendingItems();
    renderRecommendedItems();
    renderSearchHistory();
    renderMatchingSuggestions("");
    updateClearInputButton();
}

initializeArchSearch();

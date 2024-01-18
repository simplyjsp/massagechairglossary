document.addEventListener('DOMContentLoaded', function() {
   const glossaryData = {
    "Massage Techniques": {
        "4D Massage Mechanism": "A 4D back and glutes massage mimics deep tissue massage of human hands through the use of a 4D mechanism.",
        "Shiatsu Massage": "A form of Japanese bodywork based on ideas in traditional Chinese medicine, involving rhythmic pressing on body points.",
        "Kneading Technique": "A massage technique that involves rhythmic pressing movements to alleviate muscle tension and enhance relaxation."
    },
    "Chair Features": {
        "Zero Gravity": "Elevates your feet above your heart, mimicking the position of astronauts during liftoff to provide relief and relaxation.",
        "Airbag Compression Therapy": "Inflates and deflates airbags around the body to provide a sensation of compression and enhance circulation."
    },
    "Settings and Controls": {
        "Bluetooth Speakers": "Allows you to connect your device via Bluetooth for a personalized audio experience during your massage.",
        "Auto Programs": "Pre-set massage programs designed to target specific areas or provide certain types of massage automatically."
    },
    "Health and Wellness Benefits": {
        "Deep Tissue Massage": "Targets deeper layers of muscle and connective tissue, helpful for chronic aches and pains."
    },
    "Technological Innovations": {
        "Body Scan Technology": "Detects the position of your body in the chair to customize the massage to your individual needs."
    },
    "Comfort and Customization": {
        "Adjustable Shoulder Airbags": "Allows for a more tailored fit and targeted massage in the shoulder area."
    },
    "Ambient Features": {
        "Chromotherapy Lights": "Uses the color spectrum to help balance physical, emotional, spiritual, and mental energy."
    },
    "Convenience and Accessibility": {
        "Easy Access Control Panel": "Allows you to control all aspects of your massage without reaching for a remote."
    }
};


    populateCategories(glossaryData);
    const searchField = document.querySelector('.search-field');
    const searchButton = document.querySelector('button');
    const resultContainer = document.getElementById('glossaryResult');

    searchButton.addEventListener('click', function() {
        searchGlossary(searchField.value, glossaryData, resultContainer);
    });

    searchField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});

function populateCategories(glossaryData) {
    const categoryContainer = document.querySelector('.category-tabs');
    for (const category in glossaryData) {
        const categoryTab = document.createElement('div');
        categoryTab.className = 'category-tab';
        categoryTab.innerHTML = `<i class="fa fa-tag"></i> ${category}`;
        categoryTab.addEventListener('click', function() {
            displayCategoryTerms(category, glossaryData[category]);
        });
        categoryContainer.appendChild(categoryTab);
    }
}

function displayCategoryTerms(category, terms) {
    const resultContainer = document.getElementById('glossaryResult');
    resultContainer.innerHTML = `<h2>${category}</h2>`;
    for (const term in terms) {
        const termDiv = document.createElement('div');
        termDiv.innerHTML = `<strong>${term}</strong>: ${terms[term]}`;
        resultContainer.appendChild(termDiv);
    }
    resultContainer.style.display = 'block';
}

function searchGlossary(searchTerm, glossaryData, resultContainer) {
    let found = false;
    resultContainer.innerHTML = '';
    searchTerm = searchTerm.toLowerCase();

    for (const category in glossaryData) {
        for (const term in glossaryData[category]) {
            if (term.toLowerCase().includes(searchTerm)) {
                if (!found) {
                    resultContainer.innerHTML = `<h2>Search Results</h2>`;
                    found = true;
                }
                const termDiv = document.createElement('div');
                termDiv.innerHTML = `<strong>${term}</strong>: ${glossaryData[category][term]}`;
                resultContainer.appendChild(termDiv);
            }
        }
    }

    if (!found) {
        resultContainer.innerHTML = '<p>No results found.</p>';
    }

    resultContainer.style.display = 'block';
}

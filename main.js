// Custom JavaScript for KonecX
// (Move any custom JS from <script> in index.html here if needed)

// Dummy Profile Data (Update with new names/details fitting the theme)
const profiles = {
     profile1: { name: "SirGoodra", firstName: "Austin", age: 28, location: "Austin, TX", language: "English", createdBy: "Self", games: "Pokemon, Legend of Zelda, Minecraft, Marvel Rivals", systems: "PC, Switch", about: "An avid gamer and socialite, passionate about Pokemon and Soccer. Seeking a community to converse with about similar interests. Enjoys video games, anime, and watching Premier League soccer." },
     profile2: { name: "vonliveonetime", firstName: "Jayvon", age: 31, location: "Austin, TX", height: "5'11\"", religion: "Sikh, Punjabi", language: "Punjabi, Hindi, English", marital: "Never Married", createdBy: "Self", education: "MBA (Finance)", profession: "Investment Banker", income: "₹50 Lakhs+", about: "Ambitious and driven professional with a balanced outlook on life. Enjoys staying active, traveling, and exploring financial markets. Looking for a smart, independent, and family-oriented partner.", img:'images/profile-2.jpg' },
     profile3: { name: "gonutz98", firstName: "Aisha", age: 27, location: "Hyderabad", height: "5'5\"", religion: "Muslim, Sunni", language: "Urdu, English, Hindi", marital: "Never Married", createdBy: "Parents", education: "B.Des (Graphic Design)", profession: "Graphic Designer", income: "₹12-15 Lakhs", about: "Creative and artistic soul with a modern outlook rooted in traditional values. Enjoys painting, calligraphy, and spending time with loved ones. Seeking a kind, understanding, and supportive partner.", img:'images/profile-3.jpg' },
     profile4: { name: "Rohan Mathew", firstName: "Rohan", age: 30, location: "Chennai", height: "6'0\"", religion: "Christian, Syrian Catholic", language: "Malayalam, English, Tamil", marital: "Never Married", createdBy: "Self", education: "M.Tech (Data Science)", profession: "Data Scientist", income: "₹30-35 Lakhs", about: "Analytical and tech-savvy individual with a love for problem-solving. Enjoys coding, playing the guitar, and long drives. Looking for a compatible partner who is intelligent, humorous, and values honesty.", img:'images/profile-4.jpg' },
};

// --- Modal Handling Logic ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        requestAnimationFrame(() => {
            modal.classList.remove('invisible', 'opacity-0', 'scale-95');
            modal.classList.add('visible', 'opacity-100');
        });
        document.body.classList.add('overflow-hidden');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('visible', 'opacity-100');
        modal.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            modal.classList.add('invisible');
            const anyModalOpen = document.querySelector('.modal.visible');
            if (!anyModalOpen) {
               document.body.classList.remove('overflow-hidden');
            }
        }, 300);
    }
}

function switchModal(fromModalId, toModalId) {
    closeModal(fromModalId);
    setTimeout(() => {
        openModal(toModalId);
    }, 150);
}

function showProfile(profileId) {
    const profileData = profiles[profileId];
    if (!profileData) {
        console.error("Profile data not found for ID:", profileId);
        return;
    }
    document.getElementById('profile-modal-name').textContent = profileData.name;
    document.getElementById('profile-modal-basic-header').textContent = `${profileData.age} yrs, ${profileData.height}, ${profileData.religion}, ${profileData.location}`;
    document.getElementById('profile-modal-firstname').textContent = profileData.firstName;
    document.getElementById('profile-modal-img').src = profileData.img;
    document.getElementById('profile-modal-img').alt = `Photo of ${profileData.name}`;
    document.getElementById('profile-modal-about').textContent = profileData.about;
    document.getElementById('profile-modal-age-height').textContent = `${profileData.age} yrs / ${profileData.height}`;
    document.getElementById('profile-modal-religion').textContent = profileData.religion;
    document.getElementById('profile-modal-location').textContent = profileData.location;
    document.getElementById('profile-modal-language').textContent = profileData.language;
    document.getElementById('profile-modal-marital').textContent = profileData.marital;
    document.getElementById('profile-modal-createdby').textContent = profileData.createdBy;
    document.getElementById('profile-modal-education').textContent = profileData.education;
    document.getElementById('profile-modal-profession').textContent = profileData.profession;
    document.getElementById('profile-modal-income').textContent = profileData.income || 'Not specified';
    document.getElementById('message-recipient-img').src = profileData.img;
    if (profileId === 'profile1') {
        document.getElementById('message-recipient-name').textContent = 'Austin';
    } else {
        document.getElementById('message-recipient-name').textContent = profileData.name;
    }
    openModal('profile-detail-modal');
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.body;
function closeMobileMenu() {
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    mobileMenuButton.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
    const anyModalOpen = document.querySelector('.modal.visible');
    if (!anyModalOpen) {
        body.classList.remove('overflow-hidden');
    }
}
mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) {
        mobileMenuButton.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.remove('hidden');
        mobileMenuButton.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        body.classList.add('overflow-hidden');
    } else {
        closeMobileMenu();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.visible');
        if (openModals.length > 0) {
            closeModal(openModals[openModals.length - 1].id);
        } else if (mobileMenuButton.getAttribute('aria-expanded') === 'true') {
            closeMobileMenu();
        }
    }
});

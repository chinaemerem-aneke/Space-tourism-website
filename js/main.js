const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownTop = 38;
    const keydownRight = 39;
    const keydownBottom = 40;

    console.log(e.keyCode);
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight || e.keyCode === keydownTop || e.keyCode === keydownBottom) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    if (e.keyCode === keydownRight || e.keyCode === keydownBottom) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }

    if (e.keyCode === keydownLeft || e.keyCode === keydownTop ) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}



function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    // To change tab focus
    tabContainer.querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    // To change content on page
    mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => panel.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    
    mainContainer
        .querySelectorAll('figure')
        .forEach((figure) => figure.setAttribute("hidden", true));
        
    mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

}
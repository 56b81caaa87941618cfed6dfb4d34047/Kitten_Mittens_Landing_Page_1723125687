/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1723125688", {
    template: `
    <header class="w-full z-30" id="header-section-container" style="min-height: 270px">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-pink-900">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none" src="https://makeinfinite-mentat-dev.azurewebsites.net/get_image/Kitten_Mittens_Landing_Page_1723125687/logo.svg" width="38" height="38" alt="Stellar"></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="HEADER_NAVBAR_TEXT_1-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_1.html">HEADER_NAVBAR_TEXT_1</a></li>
                        <li><a id="HEADER_NAVBAR_TEXT_2-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_2.html">HEADER_NAVBAR_TEXT_2</a></li>
                        <li><a id="HEADER_NAVBAR_TEXT_3-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_3.html">HEADER_NAVBAR_TEXT_3</a></li>
                        <li><a id="HEADER_NAVBAR_TEXT_4-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_4.html">HEADER_NAVBAR_TEXT_4</a></li>
                        <li><a id="HEADER_NAVBAR_TEXT_5-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_5.html">HEADER_NAVBAR_TEXT_5</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-pink-300 hover:text-pink-100" href="signin.html">Sign in</a></li>
                    <li class="ml-6"><a id="sign-up-link" class="btn-sm transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-pink-800/30 before:rounded-full before:pointer-events-none bg-gradient-to-r from-pink-400 to-pink-700 text-pink-300 hover:text-pink-100" href="signup.html"><span class="relative inline-flex items-center">Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-500">-&gt;</span></span></a></li>
                </ul>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-pink-300 hover:text-pink-100" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" : @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5 bg-gradient-to-r from-pink-400 to-pink-700">
                            <li><a id="mobile-HEADER_NAVBAR_TEXT_1-link" class="flex font-medium text-sm py-1.5 text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_1.html">HEADER_NAVBAR_TEXT_1</a></li>
                            <li><a id="mobile-HEADER_NAVBAR_TEXT_2-link" class="flex font-medium text-sm py-1.5 text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_2.html">HEADER_NAVBAR_TEXT_2</a></li>
                            <li><a id="mobile-HEADER_NAVBAR_TEXT_3-link" class="flex font-medium text-sm py-1.5 text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_3.html">HEADER_NAVBAR_TEXT_3</a></li>
                            <li><a id="mobile-HEADER_NAVBAR_TEXT_4-link" class="flex font-medium text-sm py-1.5 text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_4.html">HEADER_NAVBAR_TEXT_4</a></li>
                            <li><a id="mobile-HEADER_NAVBAR_TEXT_5-link" class="flex font-medium text-sm py-1.5 text-pink-300 hover:text-pink-100" href="HEADER_NAVBAR_TEXT_5.html">HEADER_NAVBAR_TEXT_5</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                textStylePrimary: 'text-pink-300',
                hoverTextStylePrimary: 'hover:text-pink-100',
                signUpButtonText: "text-pink-300",
                signUpButtonHover: "hover:text-pink-100",
                signUpButtonGradient: "[background:linear-gradient(theme(colors.pink.900),_theme(colors.pink.900))_padding-box,_conic-gradient(theme(colors.pink.400),_theme(colors.pink.700)_25%,_theme(colors.pink.700)_75%,_theme(colors.pink.400)_100%)_border-box]",
                signUpButtonArrow: "text-pink-500",
            };
        },
    });
                    
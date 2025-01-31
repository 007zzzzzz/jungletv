<script lang="ts">
    import { link, navigate } from "svelte-navigator";
    import { apiClient } from "./api_client";
    import { darkMode, rewardAddress, rewardBalance } from "./stores";
    import Toggle from "svelte-toggle";
    import watchMedia from "svelte-media";
    import NavbarAlert from "./NavbarAlert.svelte";

    const media = watchMedia({
        large: "(min-width: 1024px)",
        largeEnoughForLeaderboardsButton: "(min-width: 1100px)",
    });

    let largeScreen = false;
    let canShowLeaderboardsButton = false;
    let navbarOpen = false;
    media.subscribe((obj: any) => {
        largeScreen = obj.large;
        if (obj.large) {
            navbarOpen = false;
        }
        canShowLeaderboardsButton = !obj.large || obj.largeEnoughForLeaderboardsButton;
    });

    function setNavbarOpen() {
        navbarOpen = !navbarOpen;
    }

    let rAddress = "";

    rewardAddress.subscribe(async (address) => {
        rAddress = address;
    });
</script>

<nav
    class="top-0 fixed {navbarOpen
        ? 'h-auto'
        : 'h-16'} w-full flex flex-wrap items-center justify-between py-3 lg:py-0 px-2 navbar-expand-lg bg-white shadow dark:bg-gray-950 dark:text-gray-300"
    style="z-index: 60;"
>
    <div class="container max-w-none w-full h-full px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="lg:py-3 w-full relative flex lg:w-auto lg:static lg:block lg:justify-start h-full">
            <a
                use:link
                class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
                href="/"
            >
                <img src="/assets/brand/logo.svg" alt="JungleTV" class="h-11 -mb-2" />
            </a>
            {#if !largeScreen}
                <NavbarAlert />
            {/if}
            <button
                class="cursor-pointer ml-auto text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                on:click={setNavbarOpen}
            >
                <i class="fas {navbarOpen ? 'fa-times' : 'fa-bars'}" />
            </button>
        </div>
        <div class="lg:flex flex-grow items-center {navbarOpen ? 'block mt-4' : 'hidden'}">
            <ul class="flex flex-grow flex-row list-none mr-auto">
                <li class="flex items-center">
                    {#if rAddress !== ""}
                        <div
                            class="text-xs text-gray-700 dark:text-gray-300 mt-2 mb-4 lg:mt-0 lg:mb-0 flex flex-row cursor-pointer"
                            on:click={() => navigate("/rewards")}
                        >
                            <img
                                src="https://monkey.banano.cc/api/v1/monkey/{rAddress}?format=png"
                                alt="&nbsp;"
                                title="MonKey for your address"
                                class="h-9"
                                style="margin-top: -3px;"
                            />
                            <div class="flex flex-col">
                                <div>
                                    Rewarding <span class="font-mono">{rAddress.substr(0, 16)}</span>
                                </div>
                                <div>
                                    Balance:
                                    <span class="font-bold">
                                        {apiClient.formatBANPrice($rewardBalance)} BAN
                                    </span>
                                </div>
                            </div>
                        </div>
                    {/if}
                    {#if largeScreen}
                        <NavbarAlert />
                    {/if}
                </li>
                <li class="lg:py-3 flex items-center ml-auto">
                    <div class="lg:mb-0 ml-3 mb-3 flex flex-row">
                        <i class="fas fa-sun text-lg leading-lg mr-2 text-gray-500" />
                        <Toggle
                            bind:toggled={$darkMode}
                            hideLabel
                            label="Toggle dark mode"
                            toggledColor="#6b7280"
                            untoggledColor="#6b7280"
                        />
                        <i class="fas fa-moon text-lg leading-lg ml-2 text-gray-500" />
                    </div>
                </li>
            </ul>
            <ul
                class="grid grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row gap-3 content-center list-none lg:ml-4 mb-3 lg:mb-0"
            >
                <li>
                    <a
                        class="p-1 lg:py-2 flex flex-col items-center dark:text-gray-300 text-gray-700 rounded hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 outline-none focus:outline-none hover:no-underline ease-linear transition-all duration-150"
                        use:link
                        href="/about"
                    >
                        <i class="fas fa-info" />
                        <div class="text-xs font-bold uppercase">About</div>
                    </a>
                </li>

                <li class="lg:hidden xl:block">
                    <a
                        class="p-1 lg:py-2 flex flex-col items-center dark:text-gray-300 text-gray-700 rounded hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 outline-none focus:outline-none hover:no-underline ease-linear transition-all duration-150"
                        use:link
                        href="/faq"
                    >
                        <i class="fas fa-question" />
                        <div class="text-xs font-bold uppercase">FAQ</div>
                    </a>
                </li>

                <li class="lg:hidden xl:block">
                    <a
                        class="p-1 lg:py-2 flex flex-col items-center dark:text-gray-300 text-gray-700 rounded hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 outline-none focus:outline-none hover:no-underline ease-linear transition-all duration-150"
                        use:link
                        href="/guidelines"
                    >
                        <i class="fas fa-scroll" />
                        <div class="text-xs font-bold uppercase">Rules</div>
                    </a>
                </li>

                {#if canShowLeaderboardsButton}
                    <li>
                        <a
                            class="p-1 lg:py-2 flex flex-col items-center dark:text-green-500 text-green-600 rounded hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 outline-none focus:outline-none hover:no-underline ease-linear transition-all duration-150"
                            use:link
                            href="/leaderboards"
                        >
                            <i class="fas fa-trophy" />
                            <div class="text-xs font-bold uppercase">Leaderboards</div>
                        </a>
                    </li>
                {/if}

                <li class="md:col-span-2">
                    <a
                        class="p-1 lg:py-2 flex flex-col items-center dark:text-purple-500 text-purple-700 rounded hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 outline-none focus:outline-none hover:no-underline ease-linear transition-all duration-150"
                        use:link
                        href={rAddress !== "" ? "/rewards" : "/rewards/address"}
                    >
                        <i class="fas fa-coins" />
                        <div class="text-xs font-bold uppercase">
                            {#if rAddress !== ""}
                                Rewards
                            {:else}
                                Earn rewards
                            {/if}
                        </div>
                    </a>
                </li>

                <li class="md:col-span-2">
                    <a
                        class="dark:bg-yellow-600 bg-yellow-400 text-white dark:text-white p-1 lg:py-2 flex flex-col items-center rounded hover:shadow-lg hover:bg-yellow-500 dark:hover:bg-yellow-500 outline-none focus:outline-none hover:no-underline ease-linear transition-all duration-150"
                        use:link
                        href="/enqueue"
                    >
                        <i class="fas fa-plus" />
                        <div class="text-xs font-bold uppercase">Enqueue video</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

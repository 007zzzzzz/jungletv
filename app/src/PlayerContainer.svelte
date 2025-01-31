<script lang="ts">
    import { beforeUpdate } from "svelte";
    import watchMedia from "svelte-media";
    import { navigate } from "svelte-navigator";
    import Player from "./Player.svelte";
    import { rewardAddress } from "./stores";

    export let fullSize = false;
    export let fullSizePlayerContainer: HTMLElement = null;
    export let fullSizePlayerContainerWidth: number = 0;
    export let fullSizePlayerContainerHeight: number = 0;

    let playerOpen = true;
    let wasFullSize = false;
    beforeUpdate(() => {
        wasFullSize = fullSize;
    });

    let bigMinimizedPlayer = false;
    let largeEnoughToNotCollide = false;
    const media = watchMedia({
        bigMinimizedPlayer: "(min-width: 1024px) and (min-height: 800px)",
        largeEnoughToNotCollide: "(min-width: 1820px)",
    });
    media.subscribe((obj: any) => {
        bigMinimizedPlayer = obj.bigMinimizedPlayer;
        largeEnoughToNotCollide = obj.largeEnoughToNotCollide;
    });

    export let mainContentBottomPadding = "";

    let playerContainer: HTMLElement;

    const sidebarOpenCloseAnimDuration = 400;
    let sidebarOpeningOrClosing = false;

    export const onSidebarCollapseStart = () => {
        sidebarOpeningOrClosing = true;
        playerContainer.style.width = playerContainer.clientWidth + 384 + "px";
    };

    export const onSidebarCollapseEnd = () => {
        sidebarOpeningOrClosing = false;
    };

    export const onSidebarOpenStart = async () => {
        sidebarOpeningOrClosing = true;
        playerContainer.style.width = playerContainer.clientWidth - 384 + "px";
    };

    export const onSidebarOpenEnd = () => {
        sidebarOpeningOrClosing = false;
    };

    function minimizeOrMaximizePlayer() {
        if (wasFullSize && !fullSize) {
            playerContainer.classList.remove("player-maximized");
            playerContainer.classList.add("player-minimized");
            playerContainer.style.removeProperty("height");
            playerContainer.style.removeProperty("width");
            playerContainer.style.removeProperty("bottom");
            playerContainer.style.removeProperty("left");
        } else if (!wasFullSize && fullSize) {
            playerOpen = true;
            matchPlayerRectToFakeContainer(false);
        }
    }

    function matchPlayerRectToFakeContainer(becauseContainerDimensionsChanged: boolean) {
        if (playerContainer !== undefined && fullSizePlayerContainer != null) {
            if (!sidebarOpeningOrClosing) {
                if (becauseContainerDimensionsChanged) playerContainer.style.transitionProperty = "none";
                playerContainer.classList.remove("player-minimized");
                playerContainer.classList.add("player-maximized");
                playerContainer.style.height = fullSizePlayerContainerHeight + "px";
                playerContainer.style.width = fullSizePlayerContainerWidth + "px";
                let rect = fullSizePlayerContainer.getBoundingClientRect();
                playerContainer.style.bottom = window.innerHeight - rect.bottom + "px";
                playerContainer.style.left = rect.left + "px";
                playerContainer.style.transitionProperty = "width, height, bottom, left";
            }
        }
    }

    function closePlayer() {
        if (!fullSize) {
            playerOpen = false;
        }
    }

    function expandPlayer() {
        navigate("/");
    }

    // stupid way to control precisely what reactivity updates do what
    $: {
        fullSizePlayerContainerHeight;
        fullSizePlayerContainerWidth;
        matchPlayerRectToFakeContainer(true);
    }
    $: {
        if (fullSizePlayerContainer) matchPlayerRectToFakeContainer(false);
    }
    $: {
        fullSize;
        minimizeOrMaximizePlayer();
    }
    $: {
        if (!fullSize && playerOpen) {
            if (bigMinimizedPlayer) {
                mainContentBottomPadding = largeEnoughToNotCollide ? "" : "pb-64";
            } else {
                mainContentBottomPadding = "pb-32";
            }
        } else {
            mainContentBottomPadding = "";
        }
    }

    let rAddress = null;
    rewardAddress.subscribe((a) => (rAddress = a));
</script>

<div
    class="{playerOpen ? '' : 'hidden'} player-minimized bg-black z-30 player-container"
    style="transition-duration: {sidebarOpenCloseAnimDuration}ms"
    bind:this={playerContainer}
>
    {#if playerOpen}
        {#key rAddress}
            <Player />
            {#if rAddress}
                <!-- stupid thing to make the key block depend on it, otherwise it doesn't actually recreate -->
            {/if}
        {/key}
    {/if}
    <div
        class="player-close-button flex-row shadow-md bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 w-10 h-10 z-40 cursor-pointer text-xl text-center place-content-center items-center ease-linear transition-all duration-150"
        on:click={closePlayer}
    >
        <i class="fas fa-times" />
    </div>
    <div
        class="player-expand-button flex-row shadow-md bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 w-10 h-10 z-40 cursor-pointer text-xl text-center place-content-center items-center ease-linear transition-all duration-150"
        on:click={expandPlayer}
    >
        <i class="fas fa-external-link-alt" />
    </div>
</div>

<style>
    .player-container {
        transform-origin: center left;
        transition-property: width, height, bottom, left;
        transition-timing-function: cubic-bezier(0.21, 0.575, 0.394, 1.039);
        height: 6rem;
        width: 10.66rem;
        left: 1rem;
        bottom: 1rem;
    }

    .player-close-button,
    .player-expand-button {
        display: none;
    }

    .player-minimized > .player-close-button {
        display: flex;
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        right: -2.5rem;
        top: 0;
    }

    .player-minimized > .player-expand-button {
        display: flex;
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        right: -2.5rem;
        top: 2.5rem;
    }

    @media (min-width: 1024px) and (min-height: 800px) {
        .player-container {
            height: 12rem;
            width: 21.33rem;
            left: 3rem;
            bottom: 3rem;
        }
    }
</style>

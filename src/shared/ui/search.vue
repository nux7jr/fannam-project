<template>
    <form class="search">
        <input name="search" class="search__input" type="search" :placeholder="$t('header.search')">
        <button type="submit" class="search__button">
            <!-- <img class="search__icon" src="@/assets/images/icons/search.svg" alt="search"> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#8D8F91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="#8D8F91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </form>
</template>
<script></script>
<style scoped>
.search {
    display: flex;
    padding: 12px 16px;
    border-radius: var(--border-small-radius);

    background: #F5F5F5;
    width: 100%;
}
.search__input {
    width: 100%;

    border-radius: 5px;

    border: none;
    background-color: transparent;
}
.search__input:focus {
    outline: none;
}
.search__button {
    border-color: transparent;
    width: fit-content;

    display: flex;
    align-items: center;
    border-radius: 5px;
}
.search__icon {
    padding: 0 5px;
}
</style>
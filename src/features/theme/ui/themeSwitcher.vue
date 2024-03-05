<template>
    <label class="switch-theme">
        <input @click="toggleTheme" ref="themeInput" class="switch-theme__input" type="checkbox" />
        <span class="switch-theme__slider">
            <svg
                class="switch-theme__icon"
                viewBox="0 0 24 24"
                fill="none"
                height="20"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
        </span>
    </label>
</template>
<script setup>
import {useTheme} from "../model";
const { setDefalutTheme, defalutTheme, detectUserTheme } = useTheme()
// onMounted(() => {
//     window
//         .matchMedia("(prefers-color-scheme: dark)")
//         .addEventListener("change", (event) => {
//             const newColorScheme = event.matches ? "dark" : "light";
//             setElementTheme(themeInput.value, newColorScheme);
//         });
//         if (localStorage.getItem("user-theme")) {
//             setElementTheme(themeInput.value, localStorage.getItem("user-theme"))
//         } else {
//             if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//                 setElementTheme(themeInput.value, "dark");
//             } else {
//                 setElementTheme(themeInput.value, "light");
//             }
//         }
// });
const toggleTheme = () => {
    defalutTheme() == 'dark' ?  setDefalutTheme("light") : setDefalutTheme("dark");
}

</script>

<style>
.switch-theme {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch-theme__input {
    opacity: 0;
    width: 0;
    height: 0;
}

.switch-theme__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-primary);
    border-radius: 34px;
    transition: 0.6s;
}

.switch-theme__slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
}

.switch-theme__input:checked + .switch-theme__slider {
    background-color: var(--color-secondary);
}

.switch-theme__input:checked + .switch-theme__slider:before {
    transform: translateX(26px);
}

.switch-theme__icon {
    transform: rotate(250deg);
    position: absolute;
    right: 6px;
    top: 7px;
}
</style>
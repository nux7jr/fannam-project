import { defineStore } from 'pinia'
import { ref } from 'vue';



export const useAuthStore = defineStore('auth', () => {

    const user = ref({
        test: "TEST"
    });

    // const isLogin = computed(() => !!user.value)

    // async function login(userForm) {
    //     try {
            
    //     } catch (error) {
    //         return "Неверный логин/пароль";
    //     }
    // }

    // async function fetchUser() {
    //     const { data: userData } = await useApiFetch('/user/profile');
    //     user.value = await userData.value[0];
    //     return user.value[0];
    // }
    // async function refresh() {
        
    // }
    // async function logout() {
        
    // }
    return { user }
})
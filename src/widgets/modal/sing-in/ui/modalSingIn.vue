<template>
    <teleport to="body">
        <div class="container-modal">
            <div class="wrapper-modal">
                <div>
                    header modal
                </div>
                <div>
                    body modal
                </div>
                <div>
                    footer modal
                </div>
            </div>
        </div>
    </teleport>
</template>

<style>
.container-modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper-modal {
    
}
</style>
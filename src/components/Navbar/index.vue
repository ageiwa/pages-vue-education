<template>
    <header class="header">
        <div class="container">
            <img class="header__logo" src="./vue.svg" alt="">

            <nav class="header__navbar">
                <RouterLink class="navbar__link" to="/">Page #1</RouterLink>
                <RouterLink class="navbar__link" to="/page2">Page #2</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import './index.scss'
</style>
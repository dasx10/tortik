<template>
    <header class="header">
        <nav role="navigation" class="nav">
            <ul class="scip">
                <li class="scip__item">
                    <a href="#">menu</a>
                    <a href="#main">body</a>
                </li>
            </ul>
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link class="nav__link" to="/cakes" active-class="nav__link-active">Торты</router-link>
                </li>
                <li class="nav__item">
                    <router-link class="nav__link" to="/filling" active-class="nav__link-active">Начинки</router-link>
                </li>
                <li class="nav__item">
                    <router-link to="/" class="nav__link">
                        <picture>
                            <source srcset="/logo300.webp" type="image/webp" media="(min-width: 1280px)">
                            <source srcset="/logo150.webp" type="image/webp" media="(min-width: 960px) and (max-width:1280px)">
                            <source srcset="/logo100.webp" type="image/webp" media="(min-width: 680px) and (max-width: 960px)">
                            <source srcset="/logo.webp" type="image/webp" media="(max-width: 680px)">
                            <img src="/logo.png" alt="Bakery" class="nav__logo">
                        </picture>
                    </router-link>
                </li>
                <li class="nav__item">
                    <router-link class="nav__link" to="/delivery" active-class="nav__link-active">Доставка</router-link>
                </li>
                <li class="nav__item">
                    <router-link class="nav__link" to="/contact" active-class="nav__link-active">Контакты</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
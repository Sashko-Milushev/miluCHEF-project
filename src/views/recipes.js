import { html } from '../../lib.js'

const recipesTemplate = () => html`
    <div class="wrapper">
        <div class="box1">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Салати и разядки</button>
        </div>
        <div class="box2">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Постни ястия</button>
        </div>
        <div class="box3">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Ястия с месо и риба</button>
        </div>
        <div class="box4">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Печива и десерти</button>
        </div>
        <div class="box5">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Зимнина и консерви</button>
        </div>
        <div class="box6">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Напитки</button>
        </div>
    </div>
`

export function recipesView(ctx) {
    ctx.render(recipesTemplate())
}
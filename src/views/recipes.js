import { html } from '../../lib.js'

const recipesTemplate = () => html`
    <div class="grid">
        <div class="grid-item">
            <div class="container">
                <img src="../src/images/recipes.jpg" alt="Snow">
                <button class="btn">Button</button>
            </div>
        </div>
        <div class="grid-item">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Постни ястия</button>
        </div>
        <div class="grid-item">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Ястия с месо и риба</button>
        </div>
        <div class="grid-item">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Печива и десерти</button>
        </div>
        <div class="grid-item">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Зимнина и консерви</button>
        </div>
        <div class="grid-item">
            <img src="../src/images/recipes.jpg" alt="dish pic">
            <button class="btn">Напитки</button>
        </div>
    </div>
`

export function recipesView(ctx) {
    ctx.render(recipesTemplate())
}
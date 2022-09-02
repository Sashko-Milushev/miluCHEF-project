import { html } from '../../lib.js'

const recipesTemplate = () => html`
    <section id="home">
        <h1>
            Recipes
        </h1>

    </section>
`

export function recipesView(ctx) {
    ctx.render(recipesTemplate())
}